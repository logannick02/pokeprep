import { HomeOutlined, HomeFilled } from "@ant-design/icons";
import { QuestionCircleOutlined, QuestionCircleFilled } from "@ant-design/icons";
import { TrophyOutlined, TrophyFilled } from "@ant-design/icons";
import { CalculatorOutlined, CalculatorFilled } from "@ant-design/icons";
import { BookOutlined, BookFilled } from "@ant-design/icons";
import "../styles/CustomIcons.css";

interface Props {
    active: boolean;
}

export const HomeButton = (props: Props) => {
    return (
        <span
            className={`icon-wrapper ${props.active ? "active" : ""}`}
        >
            {props.active ? <HomeFilled /> : <HomeOutlined />}
        </span>
    );
}

export const QuestionButton = (props: Props) => {
    return (
        <span
            className={`icon-wrapper ${props.active ? "active" : ""}`}
        >
            {props.active ? <QuestionCircleFilled /> : <QuestionCircleOutlined />}
        </span>
    );   
}

export const TrophyButton = (props: Props) => {
    return (
        <span
            className={`icon-wrapper ${props.active ? "active" : ""}`}
        >
            {props.active ? <TrophyFilled /> : <TrophyOutlined />}
        </span>
    );   
}

export const CalculatorButton = (props: Props) => {
    return (
        <span
            className={`icon-wrapper ${props.active ? "active" : ""}`}
        >
            {props.active ? <CalculatorFilled /> : <CalculatorOutlined />}
        </span>
    );   
}

export const BookButton = (props: Props) => {
    return (
        <span
            className={`icon-wrapper ${props.active ? "active" : ""}`}
        >
            {props.active ? <BookFilled /> : <BookOutlined />}
        </span>
    );   
}