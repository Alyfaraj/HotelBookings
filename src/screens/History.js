import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from '../components/common/Layout'
import { Header } from '../components/common'
import BookingItem from '../components/history/BookingItem'
import bookings from '../data/bookings'
const History = () => {
    return (
        <Layout
        scrollEnabled={false}
            Header={<Header title='Bookings' />}
        >
            <FlatList
                data={bookings}
                keyExtractor={(item, index) => item.id}
                renderItem={({ item }) => <BookingItem {...item} />}
            />
        </Layout>
    )
}

export default History

const styles = StyleSheet.create({})