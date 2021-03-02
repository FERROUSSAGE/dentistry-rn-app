import React from 'react';

import { Container, PlusButton } from '../components/styled/index';
import Group from '../components/Group';

const Home = ({ navigation }) => {
    return (
        <Container>
            <Group navigation={navigation} title='11 ноября' items={[
                {
                    patient: {
                        name: 'Зубенко Михаил',
                        photo: 'http://pngimg.com/uploads/face/face_PNG5669.png',
                    },
                    appointment: {
                        diagnosis: 'пульпит, удаление зуба',
                        time: '12:50',
                        active: true
                    }
                },
                {
                    patient: {
                        name: 'Зубенко Михаил',
                        photo: 'http://pngimg.com/uploads/face/face_PNG5669.png',
                    },
                    appointment: {
                        diagnosis: 'пульпит, удаление зуба',
                        time: '12:50',
                    }
                }
            ]} />
            <Group navigation={navigation} title='13 ноября' items={[
                {
                    patient: {
                        name: 'Зубенко Михаил',
                        photo: 'http://pngimg.com/uploads/face/face_PNG5669.png',
                    },
                    appointment: {
                        diagnosis: 'пульпит, удаление зуба',
                        time: '12:50',
                        active: true
                    }
                },
                {
                    patient: {
                        name: 'Зубенко Михаил',
                        photo: 'http://pngimg.com/uploads/face/face_PNG5669.png',
                    },
                    appointment: {
                        diagnosis: 'пульпит, удаление зуба',
                        time: '12:50',
                    }
                }
            ]} />
        </Container>
    );
};

export {Home};