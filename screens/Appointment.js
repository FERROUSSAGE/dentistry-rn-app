import React from 'react';
import styled from 'styled-components/native';

import { Flex } from '../components/styled/index';

const Button = styled.View`
    flex:1;
    background: #2A86FF;
    box-shadow: 0px 4px 10px rgba(42, 134, 255, 0.4);

    width: 64px;
    height: 64px;
    border-radius: 50px;

    position: absolute;
    bottom: 20px;
    right: 20px;


`;

const Appointment = ({ navigation }) => {
    return (
        <Button/>
    )

};

export {Appointment};