import React from 'react';

type StarType = {
    checked: boolean
    chengeValue: () => void
}

export function Star(props: StarType) {
    return <span onClick={props.chengeValue}>{props.checked ? <b>Star </b> : 'Star '}</span>

}