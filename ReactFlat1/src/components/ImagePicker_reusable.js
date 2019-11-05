import ImagePicker from 'react-native-image-crop-picker'

const mypicker={
    getOnePick:(callback)=>{
        ImagePicker.openPicker({
            cropping: true
        }).then(image => {
            console.log(image);
            callback(image.path)
        });
    },
    getMultiPick:(callback)=>{
        ImagePicker.openPicker({
            multiple: true,
            waitAnimationEnd: false,
            includeExif: true,
            forceJpg: true,
          }).then(images => {
            let temp=[]
            images.forEach((item)=>{
              let myImage={
                uri:item.path
              }
              temp.push(myImage)
            })
            callback(temp)
          }).catch(e => alert(e));
    }
}
export default mypicker