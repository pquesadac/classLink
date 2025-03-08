import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

interface ClassItem {
  time: string;
  subject: string;
  classroom: string;
}

interface DaySchedule {
  day: string;
  classes: ClassItem[];
}

interface ScheduleProps {
  daySchedule: ClassItem[]; 
}

const Schedule: React.FC<ScheduleProps> = ({ daySchedule }) => {
  return (
    <View style={styles.scheduleContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {daySchedule.map((classItem, index) => (
          <View key={index} style={styles.classItem}>
            <Text style={styles.timeText}>{classItem.time}</Text>
            <Text style={styles.subjectText}>{classItem.subject}</Text>
            <Text style={styles.classroomText}>{classItem.classroom}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scheduleContainer: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  classItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  timeText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666666',
  },
  subjectText: {
    fontSize: 14,
    marginTop: 5,
  },
  classroomText: {
    fontSize: 12,
    color: '#888888',
    marginTop: 3,
  },
});

export default Schedule;