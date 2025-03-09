import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { calendarTheme } from '../themes/calendarTheme';
import { initializeLocale } from '../config/calendarLocale';
import Schedule from '../components/Schedule';
import { useSchedule } from '../contexts/ScheduleContext';

function CalendarScreen() {
  const { 
    isLoading, 
    error, 
    selectedDate, 
    setSelectedDate, 
    selectedDayClasses, 
    refreshSchedule 
  } = useSchedule();

  useEffect(() => {
    initializeLocale();
  }, []);

  const dayPress = (day: { dateString: string }) => {
    setSelectedDate(day.dateString);
  };

  if (isLoading) {
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
            [selectedDate]: { selected: true, selectedColor: 'rgba(97,139,74,1)' }
          }}
        />

        {selectedDate && (
          <View style={styles.eventContainer}>
            <Text style={styles.selectedDateText}>
              Horario para: {selectedDate}
            </Text>
            {selectedDayClasses.length > 0 ? (
              <Schedule daySchedule={selectedDayClasses} />
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