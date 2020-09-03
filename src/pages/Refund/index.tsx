import React, {useEffect, useState, useCallback} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Lunch from '../../assets/icons/lunch.png';
import Money from '../../assets/icons/money.png';
import Nota from '../../assets/icons/nota.png';
import CalendarCheck from '../../assets/icons/ic-visitas.png';
import IconEditar from '../../assets/icons/ic-editar.png';
import {useNavigation, useRoute} from '@react-navigation/native';
import api from '../../services';
import {Image} from 'react-native';
import formatValue from '../../utils/formatValue';
import {parseISO, format} from 'date-fns';

import {
    Container,
    Header,
    HeaderContent,
    HeaderContentSymbol,
    HeaderContentValue,
    ElementContent,
    ElementContentValue,
    TextIconDescription,
    ViewIconDescription,
    TitleIconDescription,
    ViewSpan,
    ViewFilial,
    ViewFilialInside,
    TextFilial,
    TextFilialDate,
    ImageNote,
} from './styles';

interface Params {
    id: number;
}

import Expend from '../../interfaces/Expend';

const Refund: React.FC = () => {
    const [expend, setExpend] = useState({} as Expend);
    const {goBack} = useNavigation();

    const route = useRoute();
    const routeParams = route.params as Params;

    const navigateBack = useCallback(() => {
        goBack();
    }, [goBack]);

    useEffect(() => {
        async function loadExpend(): Promise<void> {
            const response = await api.get(`/expends/${routeParams.id}`);
            setExpend({
                ...response.data,
                formattedPrice: formatValue(response.data.price),
                formattedDate: format(
                    parseISO(response.data.date),
                    'dd/MM/yyyy',
                ),
                formattedDateTime: format(
                    parseISO(response.data.date),
                    "dd/MM/yyyy - h'h'mm ",
                ),
            });
        }

        loadExpend();
    }, [routeParams]);

    return (
        <Container>
            <Header>
                <Icon
                    onPress={navigateBack}
                    name="arrow-left"
                    size={30}
                    color="#566475"
                />
                <Image source={IconEditar} />
            </Header>
            <HeaderContent>
                <HeaderContentSymbol>R$</HeaderContentSymbol>
                <HeaderContentValue>{expend.formattedPrice}</HeaderContentValue>
            </HeaderContent>
            <ElementContent>
                <Icon name="calendar" size={20} color="#9DADB8" />
                <ElementContentValue>
                    {expend.formattedDate}
                </ElementContentValue>
            </ElementContent>

            <TitleIconDescription>{expend.name}</TitleIconDescription>
            <ViewIconDescription>
                <Image source={Lunch} />
                <TextIconDescription>{expend.category}</TextIconDescription>
            </ViewIconDescription>

            <ViewSpan />

            <ViewIconDescription>
                <Image source={Money} />
                <TextIconDescription style={{color: '#09D261'}}>
                    Reembolsavel
                </TextIconDescription>
            </ViewIconDescription>

            <ViewFilial>
                <Image source={CalendarCheck} />
                <ViewFilialInside>
                    <TextFilial>Contele Filial de Santos - SP</TextFilial>
                    <TextFilialDate>{expend.formattedDateTime}</TextFilialDate>
                </ViewFilialInside>
            </ViewFilial>
            <ElementContent>
                <ImageNote
                    source={Nota}
                    style={{
                        resizeMode: 'cover',
                    }}
                />
            </ElementContent>
        </Container>
    );
};

export default Refund;
