import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, Text } from 'react-native';
import Swipeout from 'react-native-swipeout';

import { Flex } from './styled/index';

const GroupTittle = styled.Text`
  font-size: 22px;
  color: #000;
  font-weight: 600;
  margin-bottom: 20px;
  line-height: 30px;

  margin-top: 25px;
`;

const GrayText = styled.Text`
  color: #8B979F;
  font-size: 16px;
`;

const Avatar = styled.Image`
  border-radius: 50px;
  width: 40px;
  height: 40px;

  margin-right: 16px;
`;

const GroupRow = styled(Flex)`
  padding: 20px 0;
`;

const Date = styled.TouchableHighlight`
  background: ${props => props.active ? '#2A86FF' : '#E9F5FF'}; 
  
  padding: 8px 10px;
  border-radius: 18px;
`;

const DateText = styled.Text`
  color: ${props => props.active ? '#fff' : ' #4294FF'};
  font-size: 14px;
  line-height: 17px;
`
const ButtonEdit = styled.View`
  width: 80px;
  height: 80px;

  background-color: #B4C1CB;
`;


const Group = ({ navigation, title, items }) => {

    const goToProfileHandler = (item) => {
        navigation.navigate('Appointment', {item})
    }

    return (
        <Flex>
          <GroupTittle>{title}</GroupTittle>
            {items && 
                items.map((item, i) => {
                  return <Swipeout
                    key={i}
                    autoClose={true}
                    backgroundColor='transparent'
                    right={[<ButtonEdit text='edit'/>, <ButtonEdit/>]}>
                    <TouchableOpacity onPress={goToProfileHandler.bind(this, item)}>
                      <GroupRow direction="row" justifyContent='space-between' alignItems='center' style={{ borderBottomWidth: 2, borderColor: '#f3f3f3' }}>
                        <Flex direction="row">
                          <Avatar source={{ uri: `${item.patient.photo}` }} />
                          <Flex direction="column">
                            <Text style={{ fontSize: 16, color: '#000' }}>{item.patient.name}</Text>
                            <GrayText>{item.appointment.diagnosis}</GrayText>
                          </Flex>
                        </Flex>
                        <Date active={item.appointment.active}>
                          <DateText active={item.appointment.active}>{item.appointment.time}</DateText>
                        </Date>
                      </GroupRow>
                    </TouchableOpacity>
                  </Swipeout>     
                })
            }
        </Flex>
    );

};

export default Group;