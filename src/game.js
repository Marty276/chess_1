import "./game_styles.css";
import { Board } from "./board";
import {
    empty_board,
    default_positions,
    change_box_class,
    detect_click_target
} from "./tools";
import { tower_move } from "./moves_calculator"

import { useState, useEffect } from "react";

export const Game = () => {

    let board = empty_board;
    let possible_moves = new Array;
    var positions = default_positions;

    function draw_pieces(){
        for (let piece in positions){
            for (let position of positions[piece]){
                if (position in board){
                    board[position] = piece;
                    let box_element = document.getElementById(position);
                    box_element.className = change_box_class(box_element.className, piece);
                }
            }
        }
    }

    document.addEventListener("click", click);

    let moving_piece = null;

    function click(e){
        let box_clicked = detect_click_target(e);

        if (box_clicked){
            if (moving_piece === null && box_clicked["piece"] !== "EM"){
                
                moving_piece = box_clicked;
                possible_moves = tower_move(moving_piece, board);

            }else if (moving_piece !== null){

                if (possible_moves.includes(box_clicked.id)){
                    clear_moved_piece(moving_piece);
                    move_piece(moving_piece, box_clicked);
                }

                moving_piece = null;

            }
        }
    }

    function move_piece(moving_piece, box_clicked){

        if (board[box_clicked.id] !== null){
            clear_moved_piece(box_clicked);
        }

        positions[moving_piece.piece].push(box_clicked.id);
        board[box_clicked.id] = moving_piece.piece;
        let box_element = document.getElementById(box_clicked.id);
        box_element.className = change_box_class(box_element.className, moving_piece.piece);
    }

    function clear_moved_piece(moving_piece){

        let index_to_delete = positions[moving_piece.piece].indexOf(moving_piece.id);
        positions[moving_piece.piece].splice(index_to_delete, 1);
                
        board[moving_piece.id] = null;

        let box_element = document.getElementById(moving_piece.id);
        box_element.className = change_box_class(box_element.className, "EM");

    }
    useEffect(()=>{
        draw_pieces();
    }, []);

    return <Board/>
}


