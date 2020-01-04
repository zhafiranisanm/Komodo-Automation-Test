import {Selector} from 'testcafe';

fixture `Login Komodo Apps`
.page `http://localhost:3000/`;

test ("Login With Valid Email, Granted Access", async t =>{
    await t
    //click email textfield
    .click(Selector('#input-email'))
    //input valid email
    .typeText(Selector('#input-email'),("komodo@example.com"), {paste:true})
    //click password textfield
    .click(Selector('#input-password'))
    //input password
    .typeText(Selector('#input-password'),("komodo123"), {paste:true})
    //click button login
    .click(Selector('.btn.btn-lg.btn-primary.w-100'))
    //expect button logout
    .expect(Selector('.btn.btn-outline-danger').innerText).eql('Log out')
})

test ("Login With Valid Email, Not Granted Access", async t =>{
    await t
    //click email textfield
    .click(Selector('#input-email'))
    //input valid email
    .typeText(Selector('#input-email'),("testing@example.com"), {paste:true})
    //click password textfield
    .click(Selector('#input-password'))
    //input password
    .typeText(Selector('#input-password'),("testing123"), {paste:true})
    //click button login
    .click(Selector('.btn.btn-lg.btn-primary.w-100'))
    //expect warning text
    .expect(Selector('.text-center.text-danger').innerText).eql('your account has deactivated')
})

test ("Login With Valid Email and Wrong Password", async t =>{
    await t
    //click email textfield
    .click(Selector('#input-email'))
    //input valid email
    .typeText(Selector('#input-email'),("komodo@testing.com"), {paste:true})
    //click password textfield
    .click(Selector('#input-password'))
    //input password
    .typeText(Selector('#input-password'),("testing123"), {paste:true})
    //click button login
    .click(Selector('.btn.btn-lg.btn-primary.w-100'))
    //expect warning text
    .expect(Selector('.text-center.text-danger').innerText).eql('email / password is incorrect')
})

test ("Login With Valid Username, Granted Access", async t =>{
    await t
    //click email textfield
    .click(Selector('#input-email'))
    //input valid email
    .typeText(Selector('#input-email'),("komodo"), {paste:true})
    //click password textfield
    .click(Selector('#input-password'))
    //input password
    .typeText(Selector('#input-password'),("komodo123"), {paste:true})
    //click button login
    .click(Selector('.btn.btn-lg.btn-primary.w-100'))
    //expect button logout
    .expect(Selector('.text-center.text-danger').innerText).eql('email / password is incorrect')
})

test ("Login With Valid Username, Not Granted Access", async t =>{
    await t
    //click email textfield
    .click(Selector('#input-email'))
    //input valid email
    .typeText(Selector('#input-email'),("testing"), {paste:true})
    //click password textfield
    .click(Selector('#input-password'))
    //input password
    .typeText(Selector('#input-password'),("testing123"), {paste:true})
    //click button login
    .click(Selector('.btn.btn-lg.btn-primary.w-100'))
    //expect warning text
    .expect(Selector('.text-center.text-danger').innerText).eql('email / password is incorrect')
})

test ("Login With Granted Access Username and Wrong Password", async t =>{
    await t
    //click email textfield
    .click(Selector('#input-email'))
    //input valid email
    .typeText(Selector('#input-email'),("komodo"), {paste:true})
    //click password textfield
    .click(Selector('#input-password'))
    //input password
    .typeText(Selector('#input-password'),("testing123"), {paste:true})
    //click button login
    .click(Selector('.btn.btn-lg.btn-primary.w-100'))
    //expect button logout
    .expect(Selector('.text-center.text-danger').innerText).eql('email / password is incorrect')
})

test ("Login With Not Granted Acsess Username and Wrong Password", async t =>{
    await t
    //click email textfield
    .click(Selector('#input-email'))
    //input valid email
    .typeText(Selector('#input-email'),("testing"), {paste:true})
    //click password textfield
    .click(Selector('#input-password'))
    //input password
    .typeText(Selector('#input-password'),("komodo123"), {paste:true})
    //click button login
    .click(Selector('.btn.btn-lg.btn-primary.w-100'))
    //expect warning text
    .expect(Selector('.text-center.text-danger').innerText).eql('email / password is incorrect')
})

test ("Login not Valid Username and Wrong Password", async t =>{
    await t
    //click email textfield
    .click(Selector('#input-email'))
    //input valid email
    .typeText(Selector('#input-email'),("   "), {paste:true})
    //click password textfield
    .click(Selector('#input-password'))
    //input password
    .typeText(Selector('#input-password'),("   "), {paste:true})
    //click button login
    .click(Selector('.btn.btn-lg.btn-primary.w-100'))
    //expect warning text
    .expect(Selector('.text-center.text-danger').innerText).eql('email / password is incorrect')
})