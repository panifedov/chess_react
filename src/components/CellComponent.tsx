import React, { FC } from 'react';
import { Cell } from '../models/Cell';

interface cellProps {
    cell: Cell;
    selected:boolean;
    click: (cell: Cell) => void;
}

const CellComponent: FC<cellProps> = ({cell, selected, click}) => {
    return (
        <div
            className={['cell', cell.color, selected ? "selected" : ''].join(' ')}
            onClick={() => click(cell)}
            style={{background: cell.available && !cell.figure ? 'green' : '' }}
        >
            {cell.available && !cell.figure && <div className='available'/>}
            {cell.figure?.logo && <img src={cell.figure.logo} alt='figure' />}
        </div>
    );
};

export default CellComponent;