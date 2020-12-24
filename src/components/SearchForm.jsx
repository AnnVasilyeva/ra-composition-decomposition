import React from 'react';
import { Form, Input, Button } from 'reactstrap';

export default function SearchForm () {
    return (
        <Form className='search-form'>
            <div className='form-logo'></div>
            <Input/>
            <Button>Найти</Button>
        </Form>
    )
}