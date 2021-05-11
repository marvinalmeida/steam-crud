import { makeFullName } from './User.jsx'

const firstNameMock = 'marvin'
const lastNameMock = 'almeida'

describe('Deve mostrar primeiro e ultimo nome', ()=>{
    it('deve ser primeiro e ultimo nome', ()=>{
        expect(makeFullName(firstNameMock, lastNameMock)).toBe({`${firstNameMock}${lastNameMock}`)
    })
})