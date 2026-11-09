const petOwner = {
    name: 'Jolonto Kholil',
    contact:{
        phone: '098347372',
        email:'xyz@gmail.com'
    },
    pet:{
        name: 'Lofie',
        info:{
            colour:'black',
            weight:'1.2kg'
        },
    },

};
console.log(petOwner?.address?.houseno);
console.log(petOwner.pet.info.weight);