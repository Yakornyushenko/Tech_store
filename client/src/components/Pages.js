import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Pagination from 'react-bootstrap/Pagination';

const Pages = observer(() => {
    const {device} = useContext(Context);
    let pageCount;
    if (device.limit) {
        pageCount = Math.ceil(device.totalCount / device.limit);
    } else {
        pageCount = Math.ceil(device.totalCount / 6)
    }
    const pages = [];

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1);
    }

    return (
        <Pagination className='mt-5'>
            {pages.map((page, index) => (
                <Pagination.Item
                    key={index}
                    active={page === device.page}
                    onClick={() => device.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            ))}
        </Pagination>
    );
});

export default Pages;