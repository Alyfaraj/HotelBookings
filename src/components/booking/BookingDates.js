import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Colors, Dimensions, Fonts } from '../../theme'
import Icon from 'react-native-vector-icons/Feather'
import Calendar from "react-native-calendar-range-picker";
import moment from 'moment';
import { AppButton } from '../common';

const BookingDates = ({ onSubmit }) => {
    const [dates, setDates] = useState({
        start: null,
        end: null
    })

    return (
        <View>
            <View style={{ height: Dimensions.DEVICE_HEIGHT * .5 }} >
                <Calendar
                    startDate={dates.start}
                    endDate={dates.end}
                    onChange={({ startDate, endDate }) => setDates({ start: startDate, end: endDate })}
                    style={{
                       container:{backgroundColor:'red'},
                        monthNameText: {
                            marginStart: -10,
                            fontFamily: Fonts.BOLD,
                            color:Colors.black
                        },
                        holidayColor: 'black',
                        selectedDayBackgroundColor: Colors.primary,
                        todayColor: Colors.black,
                        selectedBetweenDayBackgroundTextColor: 'rgba(0,167,110,.2)',
                    }}
                    pastYearRange={0}
                    futureYearRange={2}
                    disabledBeforeToday={true}
                    isMonthFirst
                    
                />
            </View>
            <View style={styles.row} >
                <View>
                    <Text style={styles.stepTitle} >Check In </Text>
                    <Text style={styles.date} >
                        {dates.start ? moment(dates?.start).format('MMMM D') : "-"}
                    </Text>
                </View>
                <Icon name='chevron-right' color={Colors.grey} size={25} />
                <View>
                    <Text style={styles.stepTitle} >Check Out </Text>
                    <Text style={styles.date} >
                        {dates.end ? moment(dates?.end).format('MMMM D') : '-'}
                    </Text>
                </View>
            </View>
            <AppButton title='Continue' onPress={() => onSubmit(dates)} />
        </View>
    )
}

export default BookingDates

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        width: Dimensions.DEVICE_WIDTH * .8,
        alignSelf: 'center',
        marginVertical: 10,
        justifyContent: 'space-between'
    },
    stepTitle: {
        fontFamily: Fonts.REGULAR,
        color: Colors.grey,
        fontSize: 16,
        alignSelf: 'flex-start',
        marginTop:10

    },
    date: {
        fontFamily: Fonts.BOLD,
        color: Colors.black,
        fontSize: 20,
        alignSelf: 'flex-start',
        marginTop: 10
    }

})