import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

import api from '../../services';
import formatValue from '../../utils/formatValue';
import formatListDate from '../../utils/formatListDate';
import Lunch from '../../assets/icons/lunch.png';
import Money from '../../assets/icons/money.png';

import MoneyDone from '../../assets/icons/moneydone.png';

import {
    Container,
    Header,
    Title,
    Titlebar,
    SubTitleNumber,
    SubTitleText,
    ExpendLine,
    ExpendPricingIcon,
    ExpendFooterContainer,
    ExpendListContainer,
    ExpandContainer,
    ExpendFooterLabel,
    ExpendFooterValue,
    ExpendFooterValueContainer,
    ExpendFooterValueMoeda,
    ExpendPricingValue,
    Expend,
    ExpendIcon,
    ExpendContent,
    ExpendDescriptionContent,
    ExpendTitle,
    ExpendDescription,
    ExpendPricing,
} from './styles';

import {ExpendFormat} from '../../interfaces/Expend';
import {useExpend} from '../../hooks/expend';

const ExpendPage: React.FC = () => {
    const [expendsFormat, setExpandsFormat] = useState<ExpendFormat[]>([]);
    const [total, setTotal] = useState('');
    const navigation = useNavigation();
    const {expends} = useExpend(); //hook disponível

    async function handleNavigate(id: number): Promise<void> {
        navigation.navigate('Refund', {
            id,
        });
    }

    useEffect(() => {
        async function loadExpends(): Promise<void> {
            try {
                const response = await api.get('/expends');
                const overall = response.data.reduce((accumulator, item) => {
                    return accumulator + item.price;
                }, 0);
                setTotal(formatValue(overall));
                setExpandsFormat(formatListDate(response.data));
            } catch (error) {
                console.log(error);
            }
        }
        loadExpends();
    }, []);

    return (
        <Container>
            <Header>
                <Title>Setembro</Title>
                <Icon
                    name="search"
                    size={23}
                    color="#566475"
                    onPress={() => navigation.navigate('Home')}
                />
            </Header>

            <ScrollView>
                <ExpandContainer>
                    {expendsFormat.map((item) => (
                        <ExpendListContainer key={item.date}>
                            <Titlebar>
                                <SubTitleNumber>
                                    {new Intl.DateTimeFormat('pt-BR', {
                                        day: '2-digit',
                                    }).format(new Date(item.date))}
                                </SubTitleNumber>
                                <SubTitleText>
                                    {new Intl.DateTimeFormat('pt-BR', {
                                        weekday: 'long',
                                    }).format(new Date(item.date))}
                                </SubTitleText>
                            </Titlebar>
                            {item.expends.map((expend: Expend) => (
                                <Expend
                                    key={expend.id}
                                    onPress={() => handleNavigate(expend.id)}
                                    activeOpacity={0.6}
                                    testID={`expend-${expend.id}`}>
                                    <ExpendContent>
                                        <ExpendLine>
                                            <ExpendTitle done={expend.done}>
                                                {expend.name}
                                            </ExpendTitle>
                                            <ExpendDescriptionContent>
                                                <ExpendIcon source={Lunch} />
                                                <ExpendDescription
                                                    done={expend.done}>
                                                    {expend.category}
                                                </ExpendDescription>
                                            </ExpendDescriptionContent>
                                        </ExpendLine>
                                        <ExpendPricing>
                                            <ExpendPricingIcon
                                                source={
                                                    expend.done === true
                                                        ? MoneyDone
                                                        : Money
                                                }
                                            />
                                            <ExpendPricingValue
                                                done={expend.done}>
                                                {formatValue(expend.price)}
                                            </ExpendPricingValue>
                                        </ExpendPricing>
                                    </ExpendContent>
                                </Expend>
                            ))}
                        </ExpendListContainer>
                    ))}
                </ExpandContainer>
                <ExpendFooterContainer>
                    <ExpendFooterLabel>Total</ExpendFooterLabel>
                    <ExpendFooterValueContainer>
                        <ExpendFooterValueMoeda>R$</ExpendFooterValueMoeda>
                        <ExpendFooterValue>{total}</ExpendFooterValue>
                    </ExpendFooterValueContainer>
                </ExpendFooterContainer>
            </ScrollView>
        </Container>
    );
};

export default ExpendPage;
