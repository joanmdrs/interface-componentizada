import React from "react";
import styled from 'styled-components'
import {Tabs, TabList, Tab, TabPanel} from 'react-tabs'

export const WrapperTabs = styled(Tabs)`
    font-size: 16px;
    width: 100% ;

`;

export const WrapperTabList = styled(TabList)`
    list-style-type: none;
    display: flex;
    margin: 0;
    margin-bottom: 8px;
    gap: 15px ;

`;

WrapperTabList.tabsRole = 'TabList';

export const WrapperTab = styled(Tab)`
    border-radius: 16px;
    border: 1px solid #ccc;
    padding: 16px;
    user-select: none;
    cursor: pointer;
    z-index: 99999;
    background-color: "#fff" ;

    &:focus {
        outline: none;
    }

    &.is-selected {
        box-shadow: 5px 3px 10px 8px rgba(0, 0, 0, 0.2);
    }

`;


WrapperTab.tabsRole = 'Tab';


export const WrapperTabPanel = styled(TabPanel)`

    padding: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    display: none;


    &.is-selected {
        display: block;
    }

`;

WrapperTabPanel.tabsRole = 'TabPanel';
