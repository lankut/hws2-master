import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                maxWidth: '150px',
                color: '#00CC22',
                '& .MuiSlider-thumb': {
                    backgroundColor: '#00CC22',
                    // position: 'relative', // важно для позиционирования псевдоэлемента
                    // zIndex: 3,
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 18,
                        height: 18,
                        borderRadius: '50%',
                        backgroundColor: '#fff',
                        display: 'block', // это нужно для отображения псевдоэлемента
                        // zIndex: 6,
                    },
                    // Добавляем внутрь thumb и маленькую точку внутри псевдоэлемента:
                    // '&::after > span': {
                    //     content: '""',
                    //     position: 'absolute',
                    //     top: '50%',
                    //     left: '50%',
                    //     transform: 'translate(-50%, -50%)',
                    //     width: 6,
                    //     height: 6,
                    //     borderRadius: '50%',
                    //     backgroundColor: '#00CC22',
                    //     display: 'block',
                    //     // zIndex: -3,
                    // },
                },
                '& .MuiSlider-track': {
                    backgroundColor: '#00CC22',
                },
                '& .MuiSlider-rail': {
                    backgroundColor: '#8B8B8B',
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
