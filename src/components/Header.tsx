import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Modal,
  TextInput,
  I18nManager,
  Platform
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CalendarPicker from 'react-native-calendar-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useTranslation } from 'react-i18next';

const Header = ({ navigation }) => {
  const { t } = useTranslation();
  const [isDiaryModalVisible, setIsDiaryModalVisible] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const isRTL = I18nManager.isRTL;
  const alignItemStyle =  isRTL ? 'flex-start': null;
  const textAlignStyle =  isRTL ? 'right' :'left';
  const alignSelfStyle = isRTL ? 'flex-start' : null;

  const formatDate = (date) => {
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      weekday: 'short',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
    return date.toLocaleString('en-US', options).replace(/,\s(\d+)/, ' $1');
  };

  const [notes, setNotes] = useState([
    { id: 1, title: formatDate(new Date()), text: t('header.sayYourMindHere') },
  ]);

  const [voiceNotes, setVoiceNotes] = useState([
    { id: 1, title: formatDate(new Date()), text: t('header.sayYourMindHere') },
  ]);

  const onDateChange = (date) => {
    setSelectedDate(date);
  };

  const onChangeTime = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowTimePicker(false);
    setDate(currentDate);
  };

  const handleAddNote = () => {
    const newNote = {
      id: notes.length + 1,
      title: formatDate(new Date()),
      text: t('header.sayYourMindHere'),
    };
    setNotes([...notes, newNote]);
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleNoteChange = (id, text) => {
    setNotes(notes.map((note) => (note.id === id ? { ...note, text } : note)));
  };

  const handleAddVoiceNote = () => {
    const newVoiceNote = {
      id: voiceNotes.length + 1,
      title: formatDate(new Date()),
      text: t('header.sayYourMindHere'),
    };
    setVoiceNotes([...voiceNotes, newVoiceNote]);
  };

  const handleDeleteVoiceNote = (id) => {
    setVoiceNotes(voiceNotes.filter((voiceNote) => voiceNote.id !== id));
  };



  return (
    <ImageBackground
      source={require('../../assets/images/background_home.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.headerTop}>
          <Text style={styles.greeting}>{t('header.hiJohn')}</Text>
          <View style={styles.icons}>
            <TouchableOpacity onPress={() => setIsDiaryModalVisible(true)}>
              <Image
                source={require('../../assets/images/icon_dairy.png')}
                style={styles.icon}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/icon_star.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.quoteContainer,{paddingVertical:isRTL ? 0 : 10}]}>
          <Text style={[styles.quote, {paddingVertical: Platform.OS === 'ios' ? '7%' : '10%'}]}>{t('header.peaceComesFromWithin')}</Text>
        </View>
        <View style={styles.separator} />

        <Text style={[styles.question, { alignSelf: alignSelfStyle}]}>{t('header.howYouFeelToday')}</Text>
        <View style={styles.moodContainer}>
          <TouchableOpacity style={styles.moodItem}>
            <Image
              source={require('../../assets/images/excellent_mood.png')}
              style={styles.moodIcon}
              resizeMode="contain"
            />
            <Text style={styles.moodText}>{t('header.excellent')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.moodItem}>
            <Image
              source={require('../../assets/images/good_mood.png')}
              style={styles.moodIcon}
              resizeMode="contain"
            />
            <Text style={styles.moodText}>{t('header.good')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.moodItem}>
            <Image
              source={require('../../assets/images/okay_mood.png')}
              style={styles.moodIcon}
              resizeMode="contain"
            />
            <Text style={styles.moodText}>{t('header.okay')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.moodItem}>
            <Image
              source={require('../../assets/images/bad_mood.png')}
              style={styles.moodIcon}
              resizeMode="contain"
            />
            <Text style={styles.moodText}>{t('header.bad')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.moodItem}>
            <Image
              source={require('../../assets/images/terrible_mood.png')}
              style={styles.moodIcon}
              resizeMode="contain"
            />
            <Text style={styles.moodText}>{t('header.terrible')}</Text>
          </TouchableOpacity>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isDiaryModalVisible}
          onRequestClose={() => {
            setIsDiaryModalVisible(!isDiaryModalVisible);
          }}
        >
          <View style={styles.modalView}>
            <ScrollView
              horizontal={false}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                overflowX: 'hidden',
              }}
            >
              <View style={styles.modalHeader}>
                <View style={styles.modalTitleContainer}>
                  <Text style={styles.modalTitle}>
                    {t('header.dailyDiary')}
                  </Text>
                  <Image
                    source={require('../../assets/images/dairy.png')}
                    style={styles.modalIcon}
                    resizeMode="contain"
                  />
                </View>
                <TouchableOpacity
                  onPress={() => setIsDiaryModalVisible(!isDiaryModalVisible)}
                >
                  <Image
                    source={require('../../assets/images/modal_close.png')}
                    style={styles.modalCloseIcon}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.modalBody}>
                <View className={styles.calendarContainer}>
                  <CalendarPicker
                    onDateChange={onDateChange}
                    width={330}
                    selectedStartDate={selectedDate}
                    customDatesStyles={[
                      {
                        date: styles.selectedDate,
                        style: styles.selectedDate,
                        textStyle: styles.selectedDateText,
                      },
                    ]}
                    customStyles={{
                      day: {
                        fontSize: 15,
                        textAlign: 'center',
                        color: '#3C3C434D',
                      },
                      today: {
                        backgroundColor: '#0F161E',
                      },
                      todayText: {
                        color: 'white',
                      },
                      dayText: {
                        color: '#0F161E',
                        fontSize: 15,
                      },
                      textStyle: {
                        fontSize: 15,
                        color: '#0F161E',
                      },
                      monthTitle: {
                        fontSize: 20,
                        color: '#0F161E',
                        margin: 10,
                      },
                      yearTitle: {
                        fontSize: 20,
                        color: '#0F161E',
                        margin: 10,
                      },
                      week: {
                        marginTop: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                      },
                      monthContainer: {
                        backgroundColor: '#ffffff',
                      },
                      yearContainer: {
                        backgroundColor: '#ffffff',
                        paddingVertical: 10,
                      },
                      headerWrapper: {
                        marginTop: 10,
                      },
                    }}
                  />
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Text style={{ fontSize: 16 }}>{t('header.time')}</Text>
                  <View style={{ flexDirection: 'row', marginHorizontal: 2 }}>
                    <TouchableOpacity
                      style={styles.dateTimePicker}
                      onPress={() => setShowTimePicker(true)}
                    >
                      <Text>{date.toLocaleTimeString()}</Text>
                    </TouchableOpacity>
                    {showTimePicker && (
                      <DateTimePicker
                        value={date}
                        mode="time"
                        display="default"
                        onChange={onChangeTime}
                      />
                    )}
                  </View>
                </View>

                {notes.map((note) => (
                  <View key={note.id} style={styles.noteContainer}>
                    <View style={styles.noteHeader}>
                      <Text style={styles.noteTitle}>{note.title}</Text>
                    </View>
                    <View style={styles.noteBody}>
                      <TextInput
                        style={[styles.noteTextInput, {textAlign:textAlignStyle}]}
                        placeholder={note.text}
                        value={notes}
                        onChangeText={(text) => handleNoteChange(note.id, text)}
                        multiline
                      />
                    </View>
                    <View style={styles.noteActions}>
                      <TouchableOpacity
                        onPress={() => handleDeleteNote(note.id)}
                      >
                        <Image
                          source={require('../../assets/images/close.png')}
                          style={styles.noteActionIcon}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Image
                          source={require('../../assets/images/check.png')}
                          style={styles.noteActionIcon}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}

                {voiceNotes.map((voiceNote) => (
                  <View key={voiceNote.id} style={styles.voiceNoteContainer}>
                    <View style={[styles.voiceNoteHeader, , {alignItems:alignItemStyle}]}>
                      <Text style={styles.voiceNoteTitle}>
                        {t('header.voiceNote')}
                      </Text>
                    </View>
                    <View style={styles.voiceNoteBody}>
                      <TouchableOpacity>
                        <Image
                          source={require('../../assets/images/play.png')}
                          style={styles.voiceNotePlayIcon}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>
                      <View style={styles.voiceNoteProgress}>
                        <View style={styles.voiceNoteProgressBar} />
                      </View>
                      <Text style={styles.voiceNoteTime}>16:45</Text>
                    </View>
                    <View style={styles.noteActions}>
                      <TouchableOpacity
                        onPress={() => handleDeleteVoiceNote(voiceNote.id)}
                      >
                        <Image
                          source={require('../../assets/images/close.png')}
                          style={styles.noteActionIcon}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
              </View>
            </ScrollView>
            <View style={styles.voiceNoteActions}>
              <TouchableOpacity
                style={styles.micIconVoiceNote}
                onPress={handleAddVoiceNote}
              >
                <Image
                  source={require('../../assets/images/dairy_voice_note.png')}
                  style={styles.voiceNoteActionIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.editIconVoiceNote}
                onPress={handleAddNote}
              >
                <Image
                  source={require('../../assets/images/edit.png')}
                  style={styles.noteActionIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: 400,
  },
  container: {
    paddingHorizontal: 10,
    flex: 1,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '14%',
    alignItems:'center'
  },
  icons: {
    flexDirection: 'row',
  },
  icon: {
    width: 45,
    height: 45,
    marginHorizontal: 5,
  },
  greeting: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: '3%',
    color: 'white',
  },
  quoteContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: 'center',
    marginVertical: '3%',
    paddingHorizontal: '30%',
    justifyContent: 'center',
  },
  quote: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
},
  separator: {
    height: 0.5,
    backgroundColor: 'white',
    marginTop: 15,
  },
  question: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: '3%',

    color: 'white',

},
  moodContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position:'relative'
  },
  moodItem: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 15,
    elevation: 2,
    shadowColor: '#000',
    width: 65,
    height: 65,
    marginHorizontal: 10,
  },
  moodIcon: {
    width: 30,
    height: 30,
  },
  moodText: {
    marginTop: 5,
    fontSize: 13,
    color: '#A1A1AA',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,

    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 20,
    width: '93%',
    height: '80%',
    marginTop: '15%',
    paddingHorizontal: 14,
    paddingVertical: 20,
    alignSelf: 'center',
  },
  selectedDate: {
    backgroundColor: '#0F161E',
  },
  selectedDateText: {
    color: 'white',
  },
  dateTimePicker: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderWidth: 0.2,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  dateTimePickerLabel: {
    fontSize: 14,
    color: '#23232399',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  modalTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '500',
    marginRight: 10,
  },
  modalIcon: {
    width: 25,
    height: 25,
  },
  modalCloseIcon: {
    width: 25,
    height: 25,
  },
  modalBody: {
    flex: 1,
  },
  calendarContainer: {
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
    marginHorizontal: 10,
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  calendarTitle: {
    fontSize: 18,
  },
  calendarNav: {
    flexDirection: 'row',
  },
  calendarNavIcon: {
    width: 20,
    height: 20,
    marginHorizontal: 5,
  },
  calendarDays: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  calendarDay: {
    fontSize: 10,
    color: '#888',
  },
  calendarGrid: {
    // borderWidth: 1,
    // borderColor: '#ddd',
  },
  calendarRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    height: 40,
  },
  calendarCell: {
    width: '14.28%',
    textAlign: 'center',
    fontSize: 16,
  },
  calendarCellText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  timeContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 1,
  },
  timeLabel: {
    fontSize: 16,
  },
  timeInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
  },
  timeText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  timeButtons: {
    flexDirection: 'row',
  },
  timeButtonText: {
    fontSize: 16,
    color: '#888',
    marginHorizontal: 5,
  },
  noteContainer: {
    // backgroundColor: '#F8F8F8',
    // padding: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E5DFFE',
  },
  noteHeader: {
    marginBottom: 10,
  },
  noteTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  noteBody: {
    marginBottom: 10,
  },
  noteText: {
    fontSize: 12,
  },
  noteActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  noteActionIcon: {
    width: 25,
    height: 25,
    marginHorizontal: 2,
  },
  noteTextInput: {
    fontSize: 16,
    color: 'gray',
  },
  voiceNoteContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E5DFFE',
    marginVertical: 10,
  },
  voiceNoteHeader: {
    marginBottom: 10,

  },
  voiceNoteTitle: {
    fontSize: 16,
    fontWeight: '400',
  },
  voiceNoteBody: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  voiceNotePlayIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  voiceNoteProgress: {
    flex: 1,
    height: 5,
    backgroundColor: '#E8E8E8',
    borderRadius: 5,
  },
  voiceNoteProgressBar: {
    height: 4,
    backgroundColor: '#9DB8A1',
    borderRadius: 5,
    width: '45%',
  },
  voiceNoteTime: {
    fontSize: 16,
    marginLeft: 10,
    color: '#09090B',
  },
  voiceNoteActions: {
    // flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 12,
  },
  voiceNoteActionIcon: {
    width: 25,
    height: 25,
  },
  micIconVoiceNote: {
    padding: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#9DB8A1',
    marginVertical: 5,
  },
  editIconVoiceNote: {
    backgroundColor: '#9DB8A1',
    padding: 8,
    borderRadius: 10,
    marginVertical: 7,
  },
});

export default Header;
