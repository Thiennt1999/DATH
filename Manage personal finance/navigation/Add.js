// import firebase from '../db/firebase';

// export function Add (ct,addComplete) {
//     firebase.firestore()
//     .collection('Add Chi Tieu')
//     .add({
//         name: ct.name,
//         createdAt: firebase.firestore.FieldValue.serverTimestamp()
//     }).then((snapshot) => snapshot.get())
//     .then((ctData)=> addComplete(ctData.data()))
//     .catch((error)=> console.log(error));
// }
// export async function getAdd (ctRetreived) {
//     var listCT=[];
//     var snapshot = await firebase.firestore()
//     .collection('Chi Tieu')
//     .orderBy('createAt')
//     .get()

//     snapshot.forEach((doc)=>{
//         listCT.push(doc.data());
//     });
//     console.log(listCT);
//     ctRetreived(listCT);
// }