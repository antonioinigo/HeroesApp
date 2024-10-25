import { authReducer } from "../../../src/auth/context/authReducer"
import { types } from "../../../src/auth/types/types";

describe('Pruebas en <AuthReducer/>', () => { 

    test('debe de retornar el estado por defecto', () => {

        const state= authReducer({logged: false}, {});
        expect(state).toEqual({logged: false});

    })

    test('debe de (login) llamar el login auntenticar y establecer el usuario', () => {

        const action = {
            type: types.login,
            payload: {
                name: 'Antonio',
                id: '123'
            }};
        const state = authReducer({logged: false}, action);
        expect(state).toEqual({logged: true, user: action.payload}); 

    })


    test('debe de (logout) borrar el name del usuario y logged en false', () => {
        const state = {
            type: types.login,
            payload: {
                name: 'Antonio',
                id: '123'
            }};
        
        const action = {
            type: types.logout
        };
         
        const newState = authReducer(state, action);
        expect(newState).toEqual({logged: false});

    })

 })