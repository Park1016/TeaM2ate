import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import classNames from 'classnames/bind';

import styles from './Type.module.scss';

import { numSelector, typeSelector } from 'state/local';
import SelectBox from 'components/Common/SelectBox/SelectBox';


function Type({form, setForm, setShow}) {

    const cx = classNames.bind(styles);

    const t = useRecoilValue(typeSelector);
    const n = useRecoilValue(numSelector);

    const [type, setType] = useState(null);
    const [num, setNum] = useState(null);
    const [totalNum, setTotalNum] = useState(null);

    const checkDup = () => {
        if(form.type.length !== 0) {
            const check = form.type.some((item) => {
                return type === Object.keys(item)[0];
            });
            if(check) {
                alert('이미 선택된 유형입니다');
                return check;
            };
        };
    }

    const onFinish = () => {
        if(checkDup()) {
            return;
        }
        const obj = {
            [type]: {
                num: parseInt(num),
                totalNum: parseInt(totalNum)
            }
        };
        setForm({ ...form, type: [...form.type, obj] });
        setShow(false);
    };

    useEffect(()=>{
        if(t&&n) {
            setType(t[0].value);
            setNum(n[0].value);
            setTotalNum(n[1].value);
        };
    }, [t, n]);

    
    return (
        <>
            {(t && n) &&
            <ul className={cx('container')}>
                <li>
                    <p>유형</p>
                    <SelectBox value={t} data={setType} />
                </li>
                <li>
                    <p>모집 인원</p>
                    <SelectBox value={n.slice(1)} data={setTotalNum} />
                </li>
                <li>
                    <p>모집된 인원</p>
                    <SelectBox value={n.slice(0, parseInt(totalNum)+1)} data={setNum} />
                </li>
                <li onClick={onFinish}>완료</li>
            </ul>}
        </>
    );
}

export default Type;