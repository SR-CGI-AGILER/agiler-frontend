import DS from 'ember-data'
export default DS.RESTAdapter.extend({
    
    
    // createRecord(store, type, snapshot) {
    //     let data = this.serialize(snapshot);

    //     return new Promise((resolve) => {
    //         Em.$.ajax({
    //             async: true,
    //             crossDomain: true,
    //             type: 'POST',
    //             contentType: 'application/json',
    //             data: JSON.stringify(data),
    //             url: `http://localhost:8000/api/v1/project`,
    //             success: {
    //                 200: ()=>{
    //                     Em.run(null, resolve);
    //                 }
    //             }
    //         })
    //     })
    // },
});
