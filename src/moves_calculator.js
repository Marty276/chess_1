export function tower_move(piece_data, board, possible_moves){
    
    const x = piece_data.id.charAt(0);
    const y = piece_data.id.charAt(1);
    
    for (let i = 1, np = ""; i <= 8; i++){
        
        np = i.toString() + y;
        if (np != piece_data.id){
            possible_moves.push(np);
        }
    }
    for (let j = 1, np = ""; j <= 8; j++){
        np = x + j.toString();
        if (np != piece_data.id){
            possible_moves.push(np);
        }
    }

    return possible_moves;

}