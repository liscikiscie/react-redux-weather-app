import { FETCH_WEATHER } from '../actions/index';

export default function ( state = [], action ) {
    console.log('Action recived', action);
    switch ( action.type ) {
        case FETCH_WEATHER:
            //creates new array that includes all old data and new data /? concat instead of push
            // return state.concat([ action.payload.data ]);

            //new array
            return [ action.payload.data, ...state ];
    }

    return state;
}