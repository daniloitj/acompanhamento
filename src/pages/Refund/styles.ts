import styled, {css} from 'styled-components/native';

interface DoneItemProps {
    done?: boolean;
}

export const Container = styled.View`
    flex: 1;
    background: #e5e5e5;
`;

export const Header = styled.View`
    padding: 60px 24px 30px;
    background: #dce4f0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const HeaderContent = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    background: #dce4f0;
    padding-right: 24px;
    padding-bottom: 16px;
`;

export const HeaderContentSymbol = styled.Text`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: #566475;
    line-height: 48px;
    padding-right: 8px;
`;

export const HeaderContentValue = styled.Text`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 65px;
    text-align: right;
    color: #566475;
    padding: 0px 5px;
    text-transform: uppercase;
`;

export const ElementContent = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background: #e5e5e5;
    padding: 24px 25px;
    width: 100%;
`;

export const ElementContentValue = styled.Text`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    color: #566475;
    padding: 0px 5px;
`;

export const TitleIconDescription = styled.Text`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    color: #222222;
    padding-left: 26px;
    padding-bottom: 4px;
`;

export const ViewIconDescription = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background: #e5e5e5;
    padding: 0px 25px;
    width: 100%;
`;

export const TextIconDescription = styled.Text`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    text-align: right;
    color: #566475;
    padding: 0px 5px;
`;

export const ViewSpan = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background: #e5e5e5;
    padding: 30px 25px;
    width: 100%;
`;

export const ViewFilial = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background: #ffffff;
    margin: 24px 25px 0px 25px;
    padding-left: 16px;
    border: 1px;
    border-radius: 8px;
    border-color: #dce4f0;
    border-style: solid;
`;

export const ViewFilialInside = styled.View`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 10px;
`;

export const TextFilial = styled.Text`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    color: #566475;
    padding: 0px 5px;
`;

export const TextFilialDate = styled.Text`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    text-align: right;
    color: #566475;
    padding: 0px 5px;
`;

export const ImageNote = styled.Image`
    flex: 1;
    align-self: stretch;
    border-radius: 8px;
`;
