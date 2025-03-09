import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

export interface ClassItem {
  time: string;
  subject: string;
  classroom: string;
}

export type WeekDays = 'Lunes' | 'Martes' | 'Miércoles' | 'Jueves' | 'Viernes' | 'Sábado' | 'Domingo';

export type ScheduleDataType = {
  [key in WeekDays]?: ClassItem[];
};

interface ScheduleContextType {
  scheduleData: ScheduleDataType;
  isLoading: boolean;
  error: string | null;
  refreshSchedule: () => Promise<void>;
  selectedDate: string;
  selectedDayClasses: ClassItem[];
  setSelectedDate: (date: string) => void;
}

export const ScheduleContext = createContext<ScheduleContextType>({
  scheduleData: {},
  isLoading: true,
  error: null,
  refreshSchedule: async () => {},
  selectedDate: '',
  selectedDayClasses: [],
  setSelectedDate: () => {},
});

interface ScheduleProviderProps {
  children: ReactNode;
}

export const ScheduleProvider: React.FC<ScheduleProviderProps> = ({ children }) => {
  const [scheduleData, setScheduleData] = useState<ScheduleDataType>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedDayClasses, setSelectedDayClasses] = useState<ClassItem[]>([]);

  const fetchScheduleData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await fetch('http://10.0.2.2:5000/api/schedule');
      const data = await response.json();
      
      if (data) {
        setScheduleData(data);
      }
    } catch (err) {
      console.error('Error al cargar el horario:', err);
      setError('Error al cargar el horario. Por favor, intenta de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchScheduleData();
  }, []);

  useEffect(() => {
    if (selectedDate) {
      const classes = getDayClasses(selectedDate);
      setSelectedDayClasses(classes);
    } else {
      setSelectedDayClasses([]);
    }
  }, [selectedDate, scheduleData]);

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
    const spanishDay = dayNames[day] as WeekDays;
    return scheduleData[spanishDay] || [];
  };

  return (
    <ScheduleContext.Provider
      value={{
        scheduleData,
        isLoading,
        error,
        refreshSchedule: fetchScheduleData,
        selectedDate,
        selectedDayClasses,
        setSelectedDate,
      }}
    >
      {children}
    </ScheduleContext.Provider>
  );
};

export const useSchedule = () => useContext(ScheduleContext);