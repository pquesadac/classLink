import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Linking,ActivityIndicator,RefreshControl} from 'react-native';
import { styles } from '../styles/stylesInicio';

interface Author {
  name: string;
}

interface NewsItem {
  id: string;
  title: string;
  content_text: string;
  image?: string;
  date_published: string;
  url: string;
  authors: Author[];
}

interface NewsData {
  items: NewsItem[];
}

const newsData: NewsData = {
  "items": [
    {
      "id": "fc31759b2b5403b229c330f9b89fcc32",
      "url": "https://www.granadahoy.com/granada/gueejar-sierra-recuerda-domingo-puente-eta-granadino-asesinado_0_2003312808.html",
      "title": "Güéjar Sierra recuerda a Domingo Puente, el granadino asesinado por ETA hace 28 años",
      "content_text": "Han participado en el acto los compañeros de Puente en la Base Aérea de Armilla, donde trabajaba como peluquero",
      "image": "https://static.grupojoly.com/clip/2e025cdf-78fe-4c00-bfe6-5270010fa4c3_twitter-aspect-ratio_default_0.jpg",
      "date_published": "2025-02-10T16:26:40.000Z",
      "authors": [{"name": "Redacción Granada"}]
    },
    {
      "id": "0dd74ba592bbf8c905f5210e41664512",
      "url": "https://www.granadahoy.com/granada/juicio-simular-canamo-industrial-plantacion-marihuana-granada_0_2003312669.html",
      "title": "Juicio por simular tener cáñamo industrial cuando era una plantación de marihuana en Granada",
      "content_text": "A los tres acusados se les piden penas de cinco años y medio de cárcel",
      "image": "https://static.grupojoly.com/clip/ed34223a-a822-4a4b-9559-e63309622991_twitter-aspect-ratio_default_0.jpg",
      "date_published": "2025-02-10T15:54:33.000Z",
      "authors": [{"name": "Redacción Granada"}]
    },
    {
      "id": "5f1f6c5a8031b8d4b4cd739c07bf093e",
      "url": "https://www.granadahoy.com/granada/granada-participa-plato-primera-mision_0_2003312004.html",
      "title": "Granada participa en PLATO, la primera misión científica para buscar planetas potencialmente habitables",
      "content_text": "La UGR y el Instituto de Astrofísica de Andalucía forman parte del consorcio español para este proyecto",
      "image": "https://static.grupojoly.com/clip/58ecc0bc-e417-4b9f-8700-38b0cb871ad3_twitter-aspect-ratio_default_0.jpg",
      "date_published": "2025-02-10T13:49:50.000Z",
      "authors": [{"name": "Redacción Granada"}]
    },
  ]
};

function Inicio() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadNews = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      setNews(newsData.items);
    } catch (err) {
      setError('Error al cargar las noticias. Por favor, intenta de nuevo.');
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  const onRefresh = () => {
    setIsRefreshing(true);
    loadNews();
  };

  useEffect(() => {
    loadNews();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const renderNewsItem = ({ item }: { item: NewsItem }) => (
    <TouchableOpacity 
      style={styles.newsCard}
      onPress={() => Linking.openURL(item.url)}
    >
      {item.image && (
        <Image
          source={{ uri: item.image }}
          style={styles.newsImage}
          resizeMode="cover"
        />
      )}
      <View style={styles.newsContent}>
        <Text style={styles.newsTitle}>{item.title}</Text>
        <Text style={styles.newsDescription} numberOfLines={2}>
          {item.content_text}
        </Text>
        <View style={styles.newsFooter}>
          <Text style={styles.newsAuthor}>
            {item.authors[0]?.name || 'Anónimo'}
          </Text>
          <Text style={styles.newsDate}>
            {formatDate(item.date_published)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  if (isLoading && !isRefreshing) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#618B4A" />
        <Text style={styles.loadingText}>Cargando noticias...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity style={styles.retryButton} onPress={loadNews}>
          <Text style={styles.retryButtonText}>Reintentar</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Noticias en Granada</Text>
      <FlatList
        data={news}
        renderItem={renderNewsItem}
        keyExtractor={(item) => item.id}
        style={styles.newsList}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            colors={['#618B4A']}
          />
        }
        ListEmptyComponent={
          <Text style={styles.emptyText}>No hay noticias disponibles</Text>
        }
      />
    </View>
  );
}

export default Inicio;