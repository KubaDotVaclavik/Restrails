import React, {PropTypes} from 'react'
import {VisibilityFilters} from '../actions';
import FilterLink from '../containers/FilterLink'

const {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} = VisibilityFilters;

const Footer = () => 
    <p>
    Show: {" "}
    <FilterLink filter={SHOW_ALL}> All </FilterLink>
    {", "}
    <FilterLink filter={SHOW_ACTIVE}> Active </FilterLink>
    {", "}
    <FilterLink filter={SHOW_COMPLETED}> Completed </FilterLink>
    </p>;

export default Footer;