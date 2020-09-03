import styled, {css} from 'styled-components/native';

interface DoneItemProps {
    done?: boolean;
}

export const Container = styled.View`
    flex: 1;
    background: #dce4f0;
`;

export const Header = styled.View`
    padding: 60px 24px 30px;
    background: #e5e5e5;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const FilterContainer = styled.View`
    padding: 0 24px;
    margin-top: -28px;
`;

export const Title = styled.Text`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 30px;
    color: #566475;
    padding: 0px 0px;
    line-height: 44px;
`;

export const Titlebar = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 40px;
    align-items: flex-end;
    background: #e5e5e5;
    padding-bottom: 8px;

    margin-top: 16px;
`;

export const SubTitleNumber = styled.Text`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    color: #566475;
    line-height: 44px;
    color: #9dadb8;
    padding-left: 20px;
`;
export const SubTitleText = styled.Text`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 16px;
    line-height: 30px;
    color: #566475;
    padding: 0px 5px;
    line-height: 44px;
    color: #9dadb8;
    height: 39px;
    text-transform: uppercase;
`;

export const ExpandContainer = styled.View`
    margin-top: 0px;
    background: #e5e5e5;
`;
export const ExpendListContainer = styled.View`
    margin-top: 0px;
    background: #e5e5e5;
`;

export const Expend = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #f0f0f5;
    border-radius: 8px;
    margin-bottom: 8px;
`;

export const ExpendImageContainer = styled.View`
    background: #ffb84d;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    padding: 16px;
    height: 100%;
`;

export const ExpendContent = styled.View`
    flex: 1;
    flex-direction: row;
    padding: 2px 20px;
    align-items: center;
    justify-content: space-between;
`;
export const ExpendLine = styled.View``;

export const ExpendTitle = styled.Text<DoneItemProps>`
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    padding-top: 8px;
    ${(props) =>
        props.done &&
        css`
            color: #9dadb8;
            text-decoration-line: line-through;
        `}
`;

export const ExpendDescriptionContent = styled.View`
    flex: 1;
    padding: 22px;
    padding-left: 0px;
    flex-direction: row;
    height: 22px;
    align-items: center;
`;

export const ExpendIcon = styled.Image`
    padding: 12px;
    width: 12px;
    height: 12px;
`;

export const ExpendDescription = styled.Text<DoneItemProps>`
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;

    display: flex;
    align-items: center;
    text-align: center;

    margin-left: 10px;
    ${(props) =>
        props.done &&
        css`
            color: #9dadb8;
        `}
`;

export const ExpendPricing = styled.View`
    flex-direction: row;
    align-items: center;
    height: 30px;
`;

export const ExpendPricingIcon = styled.Image`
    padding: 12px;
    width: 12px;
    height: 30px;
    margin-right: 10px;
`;
export const ExpendPricingValue = styled.Text<DoneItemProps>`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    ${(props) =>
        props.done &&
        css`
            color: #9dadb8;
            text-decoration-line: line-through;
        `}
`;

export const ExpendFooterContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #dce4f0;
    padding-top: 5px;
    padding-bottom: 20px;
`;

export const ExpendFooterLabel = styled.Text`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    color: #9dadb8;
    padding-left: 20px;
    padding-top: 16px;
    text-transform: uppercase;
`;

export const ExpendFooterValueContainer = styled.View`
    display: flex;
    flex-direction: row;
    height: 34px;
    padding-top: 15px;
`;

export const ExpendFooterValueMoeda = styled.Text`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 22px;
    text-align: right;
    color: #0f3a57;
    padding-right: 5px;
`;

export const ExpendFooterValue = styled.Text`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 22px;
    text-align: right;
    color: #0f3a57;
    padding-right: 18px;
`;
