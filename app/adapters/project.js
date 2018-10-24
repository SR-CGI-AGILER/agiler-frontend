import DS from 'ember-data';
import Em from 'ember';


export default DS.RESTAdapter.extend({
	//making a server call to projects
	
	buildURL(modelName, id, snapshot, requestType, query){

        return `http://localhost:8000/api/v1/member/345/projects/`;
    }
	
	// findRecord(store, type, snapshot) {
    //     let data = this.serialize(snapshot);

    //     return new Promise((resolve) => {
    //         Em.$.ajax({
    //             async: true,
    //             crossDomain: true,
    //             type: 'GET',
    //             contentType: 'application/json',
    //             data: JSON.stringify(data),
    //             url: `http://172.23.238.243:4000/api/teams/team1`,
    //             success: {
    //                 200: ()=>{
    //                     Em.run(null, resolve);
    //                 }
    //             }
    //         })
    //     })
    // }

})
