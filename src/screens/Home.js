import { SafeAreaView, StyleSheet, Text, PermissionsAndroid, Pressable, FlatList, Alert, Linking, ActivityIndicator } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Layout from '../components/common/Layout'
import Icon from 'react-native-vector-icons/Feather'
import { Colors, Dimensions, Fonts } from '../theme'
import { HotelItem, SelectionRow } from '../components/home'
import RemoveDomain from '../utils/RemoveDomain'
import { AppContext } from '../context/AppContext'
import { getHotels } from '../services/apis'
import { showAlertForLoacationSettings, showErrorMessage } from '../utils/showFlashMessage'
import Geolocation from '@react-native-community/geolocation'
import EmpatyScreen from '../components/home/ErrorMessage'


const Home = ({ navigation }) => {
    const [filter, setFilter] = useState(0)
    const { user } = useContext(AppContext)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [hotels, setHotels] = useState([])

    const fetchNearestPlacesFromGoogle = (lat, long) => {
        getHotels(lat, long)
            .then(res => {
                setLoading(false)
                let data = []
                for (let googlePlace of res.data.results) {
                    let hotel = {}
                    if (googlePlace.photos) {
                        hotel['photo_ref'] = googlePlace.photos[0].photo_reference
                    }
                    hotel['placeTypes'] = googlePlace.types
                    hotel['placeId'] = googlePlace.place_id
                    hotel['placeName'] = googlePlace.name
                    hotel['rating'] = googlePlace.rating
                    hotel['vicinity'] = googlePlace.vicinity
                    data.push(hotel);
                }
                setHotels(data)
            })
            .catch(() => {
                setLoading(false)
                setError(true)
            })

    }


    const getCurrentLocation = async () => {
        setLoading(true)
        setError(false)
        if (Platform.OS === 'android') {
            await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            );
        }

        Geolocation.getCurrentPosition(
            (position) => {
                const location = position.coords;
                fetchNearestPlacesFromGoogle(location.latitude, location.longitude);
            },
            (error) => {
                setLoading(false)
                setError(true)
                if (error.code === 1 || error.code === 2) {
                    showAlertForLoacationSettings()
                }
            },
            {
                enableHighAccuracy: false,
                timeout: 15000,
                maximumAge: 10000,
            },
        );
    };




    useEffect(() => {
        getCurrentLocation()
    }, [])


    return (
        <Layout>
            <SafeAreaView />
            <Pressable onPress={() => navigation.navigate('Profile')} >
                <Icon name='award' size={24} color={Colors.grey} style={styles.award} />
            </Pressable>
            <Text style={styles.welcomeText} >
                Good Morning,{'\n'}{RemoveDomain(user?.email)}!
            </Text>
            <SelectionRow selected={filter} setSelected={setFilter} />

            {loading && !error && <ActivityIndicator
                color={Colors.primary}
                size='large'
                style={{ marginTop: 100 }} />}


            {!loading && error && <EmpatyScreen onPress={() => getCurrentLocation()} />}

            <FlatList
                horizontal
                data={hotels}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <HotelItem {...item} />}
                showsHorizontalScrollIndicator={false}
            />

        </Layout>
    )
}

export default Home


const styles = StyleSheet.create({
    award: {
        alignSelf: 'flex-end',
        marginTop: 10,
        marginEnd: 20,

    },
    welcomeText: {
        fontFamily: Fonts.BOLD,
        fontSize: 26,
        color: Colors.dark,
        marginTop: 16,
        lineHeight: 40,
        marginStart: 20,

    }
})