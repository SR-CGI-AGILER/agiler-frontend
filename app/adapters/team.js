import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    // buildURL(modelName, id, snapshot, requestType, query){

    //     return `http://localhost:8000/api/v1/member/345/projects/`;
    // },
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
    buildURL() {
        return `http://localhost:8000/api/v1/team/deddd8d2-e041-4fbb-a8ed-3c079af9930d`
    },
    urlForQuery(query, modelName) {
        debugger
        return `http://localhost:8000/api/v1/team/deddd8d2-e041-4fbb-a8ed-3c079af9930d`
    },
});
