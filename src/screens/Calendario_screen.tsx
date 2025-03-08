import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { calendarTheme } from '../themes/calendarTheme';
import { initializeLocale } from '../config/calendarLocale';
import Schedule from '../components/Schedule';

interface ClassItem {
  time: string;
  subject: string;
  classroom: string;
}

type WeekDays = 'Lunes' | 'Martes' | 'Miércoles' | 'Jueves' | 'Viernes' | 'Sábado' | 'Domingo';

type ScheduleDataType = {
  [key in WeekDays]?: ClassItem[]; //mapeo dias a arrays de clases
};

function CalendarScreen() {

  const [selected, setSelected] = useState('');  // Dia seleccionado
  const [currentClasses, setCurrentClasses] = useState<ClassItem[]>([]);  // Clases del dia seleccionado
  const [scheduleData, setScheduleData] = useState<ScheduleDataType>({});  // Datos del horario completo
  const [loading, setLoading] = useState(true);  // Estado de carga
  const [error, setError] = useState<string | null>(null);  // Estado de error

  useEffect(() => {
    initializeLocale();
    fetchScheduleData();
  }, []);

  const fetchScheduleData = async () => {
    try {
      const response = await fetch('http://10.0.2.2:5000/api/schedule');
      const data = await response.json();
      console.log('Datos recibidos:', data);
      if (data) {
        setScheduleData(data);
      }
      setLoading(false);
    } catch (err) {
      console.error('Error detallado:', err);
      setError('Error al cargar el horario');
      setLoading(false);
    }
  };

  const getDayClasses = (dateString: string): ClassItem[] => {
    const date = new Date(dateString);
    const dayNames: Record<string, WeekDays> = {
      'Monday': 'Lunes',
      'Tuesday': 'Martes',
      'Wednesday': 'Miércoles',
      'Thursday': 'Jueves',
      'Friday': 'Viernes',
      'Saturday': 'Sábado',
      'Sunday': 'Domingo'
    };

    const day = date.toLocaleDateString('en-US', { weekday: 'long' });
    const spanishDay = dayNames[day] || 'Lunes';
    return scheduleData[spanishDay] || [];
  };

  const dayPress = (day: { dateString: string }) => {
    setSelected(day.dateString);
    const classes = getDayClasses(day.dateString);
    setCurrentClasses(classes);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="rgba(97,139,74,1)" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContent}
      showsVerticalScrollIndicator={true}
    >
      <View style={styles.container}>
        <Calendar
          style={styles.calendar}
          theme={calendarTheme}
          onDayPress={dayPress}
          enableSwipeMonths={true}
          markedDates={{
            [selected]: { selected: true, selectedColor: 'rgba(97,139,74,1)' }
          }}
        />

        {selected && (
          <View style={styles.eventContainer}>
            <Text style={styles.selectedDateText}>
              Horario para: {selected}
            </Text>
            {currentClasses.length > 0 ? (
              <Schedule daySchedule={currentClasses} />
            ) : (
              <Text style={styles.noClassesText}>
                No hay clases programadas para este día
              </Text>
            )}
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
  },
  calendar: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0'
  },
  eventContainer: {
    padding: 15,
    paddingBottom: 30,
  },
  selectedDateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgba(97,139,74,1)',
    marginBottom: 10
  },
  noClassesText: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginTop: 20
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center'
  }
});

export default CalendarScreen;