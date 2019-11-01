import React, { Component } from 'react';
import { View, Text, Image, StyleSheet,ScrollView } from 'react-native'
import Child_Img from '../src/Child_Img'
import Images from '../Constants/Images'

class Screen_Assign_PureComp extends Component {
    render() {
        return (
            // <View style={{flex:1}}>
            //     <ScrollView>
            <View style={styles.parent_Conatiner}>
               {/* <ScrollView> */}

                <View style={styles.conatainer1}>
                    <Child_Img />
                </View>
                <View style={styles.conatainer2}>
                    <View style={styles.conatainer2a}>
                        <View style={styles.conatainer2aA}>
                            <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 10, }}>Roads less Travelled</Text>
                            <Text>Today left</Text>
                        </View>
                        <View style={styles.conatainer2aB}>
                            <Text style={{ fontSize: 15, paddingLeft: 90 }}>Total Price</Text>
                            <Text style={{ fontSize: 20, paddingLeft: 100, color: "orange" }}> $220 </Text>
                        </View>
                    </View>
                    <View style={styles.conatainer2b}>
                        <View style={styles.conatainer2bA}>
                            <View>
                                <Image
                                    style={{ width: 50, height: 50 }}
                                    source={Images.BANNER1}
                                />
                            </View>

                            <View>
                                <Text>1st Prize</Text>
                                <Text>$300</Text>
                            </View>


                        </View>
                        <View style={styles.conatainer2bB}>
                            <Image
                                style={{ width: 50, height: 50 }}
                                source={Images.BANNER2} />
                                <View>
                            <Text>2nd Prize</Text>
                            <Text>$200</Text>
                            </View>
                        </View>
                        <View style={styles.conatainer2bC}>
                            <Image
                                style={{ width: 29, height: 50 }}
                                source={Images.BANNER3}
                            />
                            <View style={{marginLeft:10}}>
                            <Text>3rd Prize</Text>
                            <Text>$300</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.conatainer3}>
                    <View style={styles.conatainer3A}>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                            {/* //Image */}
                            <Image
                                style={{ width: 30, height: 30, borderRadius: 10 }}
                                source={{ uri: 'data:image/png;base64,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' }} />

                            <Text style={{
                                fontSize: 20,
                                fontWeight: "bold",
                                paddingLeft: 2,
                                paddingTop: 2
                            }}>
                                Description</Text>
                        </View>
                        <Text style={{ fontSize: 13, paddingRight: 20, paddingLeft: 34, }}>English Language Learners Definition of component (Entry 2 of 2) : helping to make up the whole of something
                        (such as a system or a mixture) : forming or being a part of
                        something.</Text>

                    </View>
                    <View style={styles.conatainer3B}>

                        <View style={{ flex: .2, flexDirection: "row" }}>
                            <Image
                                style={{ width: 30, height: 30, borderRadius: 10 }}
                                source={{ uri: 'data:image/png;base64,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' }} />
                            <Text style={{
                                fontSize: 20,
                                fontWeight: "bold",
                                paddingLeft: 2,
                                paddingTop: 2
                            }}> Rules</Text>
                        </View>

                        <View style={{ flex: .8, flexDirection: "column" }}>

                            <View style={{
                                flex: 1,
                                flexDirection: "row",
                              //  backgroundColor: "lightgrey",
                                paddingRight: 20
                            }}>
                                <Image
                                    style={{ width: 30, height: 25, borderRadius: 23, marginRight: 6, }}
                                    source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB9CAMAAABES7fdAAAAnFBMVEX///8AmjQREiS6u74AAAAAlysAliUAmTAAABkAlB8AABsAABUAABcAjwAAABDq9e0KCyBfsnDX6tvg7+T4/Prw9/LF4cuo07AAkhW73cN7e4JubndFRU6TlJiAgIbN5tKy2Llvt3qHwZCRx5tJp1h+v4opnj83oUiczKRXsGpOq2E4pVMmJjQbGytVVFwuLjs2Nz5jZGweHiWvr7KfZRr+AAAC+klEQVRoge2ZbXOiMBRGjd0ECYJRUSgBxNZqdWtadv//f9tQ29VclW41ifshZxx01OF4SXjyYqfjcDgcDofD4XA4HI534tkNpMOwsu6c+yhMLDsffIRQ+mjV+dg4EfKfLDqTnVNa57Et5zREn/hDS9bZ3okQWUxsOEc+OgQTC9YR8RSpjc40XgLn3LxzsMKqc2jeGS9UJ1lb6LwbojptdN0h6LirgXnnU6o4PWzB+QCcoQXnM3CSkXlnorYn8qfmnZXabxGpzDunMPwszBpGvupMn807xylwWgj5AdYf8l9F2WClOsn6euczbr/h4g0I+c31ziTFqM0ar9WbBS+uH1gqmTMYtSwR5sCpIeSr92zzvLO1PqlB5C3HmpwtQQpD/ov2/45TEp48WxIqzjPf+hbJYRnhiXY9cl6/PKzU5joeNu7Va4vS+6udk1C95z1onYKBJdUR8lMPWLFSyQyB8NOzMJxBq39gHUPngxbncTFobx0swaxa30weLkxQ+GGNoVNDyO+t3klrDFYPeKHRKZsOjJUoreS7MORXmlcPY4yBNWm2ThTnUvvqYQyaD2GwYsEaQv5rK7iRWodbfVbFiQ3NqtusGgL3DDAK9pjcAZycsZrddTxtDQ3P5Cc/yZHT/HbNZAGtNrZroJVY2K6BVqJhVv0vxAftildWdhob/tZqIOTPs9kNMJ5nIOTPs26snm9h6+SQIZGrDOt/ugx9YizkW6y2/3BxOBwOh8PhcDgcjv+GuxvQ+XEDOl0V9veJdY3RSF/olrFGw1gktttejwUv9OXVnFVKmXir81chRC7yIqsLwbdZWYv8cimllNEGxvqykt2LnnySB/Yhfas5z/K8zmveLYqyEHe/it/9ywuhtfzJ8sF5nvP8NW/q4VmWiayUB7q7vDSTn0llXeeiKMui4EVWvl1eKMvrjPMyq0up4qIuRSmkk9fy+vFPaZfRbeNuXnSjIKARo73LC5Wn6QdBEAW9qDnSfiRPGEXNW30aNCeGvdcKN5H+AaehPdADvA4UAAAAAElFTkSuQmCC' }} />

                                <Text style={{ fontSize: 13, paddingRight: 20 }}>
                                    English Language Learners Definition of component (Entry 2 of 2) :
                                    helping to make up the whole of something.</Text>
                            </View>

                            <View style={{
                                flex: 1,
                                flexDirection: "row",
                               // backgroundColor: "lightgrey",
                                paddingRight: 20
                            }}>
                                <Image
                                    style={{ width: 30, height: 25, borderRadius: 23, marginRight: 6, }}
                                    source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB9CAMAAABES7fdAAAAnFBMVEX///8AmjQREiS6u74AAAAAlysAliUAmTAAABkAlB8AABsAABUAABcAjwAAABDq9e0KCyBfsnDX6tvg7+T4/Prw9/LF4cuo07AAkhW73cN7e4JubndFRU6TlJiAgIbN5tKy2Llvt3qHwZCRx5tJp1h+v4opnj83oUiczKRXsGpOq2E4pVMmJjQbGytVVFwuLjs2Nz5jZGweHiWvr7KfZRr+AAAC+klEQVRoge2ZbXOiMBRGjd0ECYJRUSgBxNZqdWtadv//f9tQ29VclW41ifshZxx01OF4SXjyYqfjcDgcDofD4XA4HI534tkNpMOwsu6c+yhMLDsffIRQ+mjV+dg4EfKfLDqTnVNa57Et5zREn/hDS9bZ3okQWUxsOEc+OgQTC9YR8RSpjc40XgLn3LxzsMKqc2jeGS9UJ1lb6LwbojptdN0h6LirgXnnU6o4PWzB+QCcoQXnM3CSkXlnorYn8qfmnZXabxGpzDunMPwszBpGvupMn807xylwWgj5AdYf8l9F2WClOsn6euczbr/h4g0I+c31ziTFqM0ar9WbBS+uH1gqmTMYtSwR5sCpIeSr92zzvLO1PqlB5C3HmpwtQQpD/ov2/45TEp48WxIqzjPf+hbJYRnhiXY9cl6/PKzU5joeNu7Va4vS+6udk1C95z1onYKBJdUR8lMPWLFSyQyB8NOzMJxBq39gHUPngxbncTFobx0swaxa30weLkxQ+GGNoVNDyO+t3klrDFYPeKHRKZsOjJUoreS7MORXmlcPY4yBNWm2ThTnUvvqYQyaD2GwYsEaQv5rK7iRWodbfVbFiQ3NqtusGgL3DDAK9pjcAZycsZrddTxtDQ3P5Cc/yZHT/HbNZAGtNrZroJVY2K6BVqJhVv0vxAftildWdhob/tZqIOTPs9kNMJ5nIOTPs26snm9h6+SQIZGrDOt/ugx9YizkW6y2/3BxOBwOh8PhcDgcjv+GuxvQ+XEDOl0V9veJdY3RSF/olrFGw1gktttejwUv9OXVnFVKmXir81chRC7yIqsLwbdZWYv8cimllNEGxvqykt2LnnySB/Yhfas5z/K8zmveLYqyEHe/it/9ywuhtfzJ8sF5nvP8NW/q4VmWiayUB7q7vDSTn0llXeeiKMui4EVWvl1eKMvrjPMyq0up4qIuRSmkk9fy+vFPaZfRbeNuXnSjIKARo73LC5Wn6QdBEAW9qDnSfiRPGEXNW30aNCeGvdcKN5H+AaehPdADvA4UAAAAAElFTkSuQmCC' }} />

                                <Text style={{ fontSize: 13, paddingRight: 20 }}>
                                    English Language Learners Definition of component (Entry 2 of 2) :
                                    helping to make up the whole of something.</Text>
                            </View>

                            <View style={{
                                flex: 1,
                                flexDirection: "row",
                               // backgroundColor: "lightgrey",
                                paddingRight: 20
                            }}>
                                <Image
                                    style={{ width: 30, height: 25, borderRadius: 23, marginRight: 6, }}
                                    source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB9CAMAAABES7fdAAAAnFBMVEX///8AmjQREiS6u74AAAAAlysAliUAmTAAABkAlB8AABsAABUAABcAjwAAABDq9e0KCyBfsnDX6tvg7+T4/Prw9/LF4cuo07AAkhW73cN7e4JubndFRU6TlJiAgIbN5tKy2Llvt3qHwZCRx5tJp1h+v4opnj83oUiczKRXsGpOq2E4pVMmJjQbGytVVFwuLjs2Nz5jZGweHiWvr7KfZRr+AAAC+klEQVRoge2ZbXOiMBRGjd0ECYJRUSgBxNZqdWtadv//f9tQ29VclW41ifshZxx01OF4SXjyYqfjcDgcDofD4XA4HI534tkNpMOwsu6c+yhMLDsffIRQ+mjV+dg4EfKfLDqTnVNa57Et5zREn/hDS9bZ3okQWUxsOEc+OgQTC9YR8RSpjc40XgLn3LxzsMKqc2jeGS9UJ1lb6LwbojptdN0h6LirgXnnU6o4PWzB+QCcoQXnM3CSkXlnorYn8qfmnZXabxGpzDunMPwszBpGvupMn807xylwWgj5AdYf8l9F2WClOsn6euczbr/h4g0I+c31ziTFqM0ar9WbBS+uH1gqmTMYtSwR5sCpIeSr92zzvLO1PqlB5C3HmpwtQQpD/ov2/45TEp48WxIqzjPf+hbJYRnhiXY9cl6/PKzU5joeNu7Va4vS+6udk1C95z1onYKBJdUR8lMPWLFSyQyB8NOzMJxBq39gHUPngxbncTFobx0swaxa30weLkxQ+GGNoVNDyO+t3klrDFYPeKHRKZsOjJUoreS7MORXmlcPY4yBNWm2ThTnUvvqYQyaD2GwYsEaQv5rK7iRWodbfVbFiQ3NqtusGgL3DDAK9pjcAZycsZrddTxtDQ3P5Cc/yZHT/HbNZAGtNrZroJVY2K6BVqJhVv0vxAftildWdhob/tZqIOTPs9kNMJ5nIOTPs26snm9h6+SQIZGrDOt/ugx9YizkW6y2/3BxOBwOh8PhcDgcjv+GuxvQ+XEDOl0V9veJdY3RSF/olrFGw1gktttejwUv9OXVnFVKmXir81chRC7yIqsLwbdZWYv8cimllNEGxvqykt2LnnySB/Yhfas5z/K8zmveLYqyEHe/it/9ywuhtfzJ8sF5nvP8NW/q4VmWiayUB7q7vDSTn0llXeeiKMui4EVWvl1eKMvrjPMyq0up4qIuRSmkk9fy+vFPaZfRbeNuXnSjIKARo73LC5Wn6QdBEAW9qDnSfiRPGEXNW30aNCeGvdcKN5H+AaehPdADvA4UAAAAAElFTkSuQmCC' }} />

                                <Text style={{ fontSize: 13, paddingRight: 20 }}>
                                    English Language Learners Definition of component (Entry 2 of 2) :
                                    helping to make up the whole of something.</Text>
                            </View>



                        </View>

                    </View>
                </View>
                <View style={styles.conatainer4}>
                    <View style={styles.conatainer4A}>
                        <Text style={{ color: "orange", fontSize: 15, fontWeight: "bold" }}>View Gallery</Text>
                    </View>
                    <View style={styles.conatainer4B}>
                        <Image
                            style={{ width: 30, height: 30, borderRadius: 10 }}
                            source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAY1BMVEX///8AAAD19fXm5uazs7PFxcX8/Pzt7e3W1tZqamr4+PiDg4Pi4uK2traWlpYgICBvb29hYWGdnZ1aWlp1dXVTU1NBQUG9vb3Ozs6lpaUlJSU7OzuPj4/c3NxJSUkUFBQyMjLLtX+JAAAEvElEQVRoge2a6bajKhBGU45RnGfj+P5P2YVoolHUbjR33bX4fiTnoLAZirIo83hISUlJSUlJSUlJSd0lJ9e+lDs/QquJDyv5ifoLdvNao6lez/vZJnIS/btUT7DYvIyRWHOF72EhJdqqEGGfroJrX5M6NfzkMrBXV008wkO/SsHyM/rxJgYAHMN2AILr4A+rNOGRag5+THC14xMC6C6yeAoPIxW5ZTODeztziyvi3Qm3faj4dSrw7UvgLoWXFK7N4Ngll18nB9DEyc6zwfl1UpKD2tYuqBmEzRPVQqvwqyl4+cnRWff7DDbc56TNPT7J49fzg1P7MOK3sKXy8Ri+aVV7p9cH/X6z/aRQTwuXYfgeKpu8uwr6MCqP2A1Af8sT4tkDNAf3kONb/lE4LLJ/B65aLM4x5nqXxvDadwPKJVs1mZmZ9S5FJ7GzTxl89az+ewVEMZmUOnyX6j+Cf3x89Ht4/Z/CDYXJ8H4O3za4H8Ft5aPP7roSrroeQXnu2fDlKrihz2cWQ2njuM4puDvtUa4UrR2Yr76qenaEaMtlrZHyKTgJPylLK1RcT1stNGt9tWXNfQpOwvWla/7Sw8ZHD2TlohmlzLCQ2LOa7MLif/E1V+hie6uDkVlicbDftjBcwSG2m/GYg3aQ7TYuCldiNO1p2MYQt5iToZs4J+le66JwXO/JXSpRyEwpjKYmrf1wQRCOC2uxgZoEKpKje1FzUgFhk2FYu3GaGNyG6TRWvF7uuyHF9V/F8JeKUSI/WBGDk+liCWTh0nD7sRHnexMvBHemBXfXIXg0HqNi7glaEF4DDLOrQr11cViQArYuisONfrS2dhHfOilOCILTwaOizfW8h4wIXB9NWV+c0M0u1fUMj8ZPVrHcbeCf4eVYtw3npYQOVPExYgzbsQHebhOBh+CzO4p5aTrYXh3Q5R52mQ/huq4w/MVadZfptnDIGlgJTdDlrI/99XBjzLjU8cKN6OAaRknNwI4HO8czOsfixODDQYp8peE86PtuWOZk8C/aTXD3g5jpqWnsXMu65d4ELz+ILbFulTfBhzWtU86jw07Z9Tvgj55Ze85LLpusZgw9pwERuAUd/TJ4N+hDTujRzQ5I18EnD5dyUhdxSj/NezxcMSaziu07dOb5Ilh6wIvgjwqYf7GyDYsyqmG27ZifnBWCe+OgzG4jWiHMDvWdXJ8Q3PTHU1CxjpXIONktvLhvWsRiuHrKOecQLo9LIXuoUN/KDWREQ+duitCcDLz3sVz1IGP/NMC24y1wDE5TNqt26ftxVKhqEcW+XzKnZ2JEld8GpxOfjn/aLunogaUj7uRv471Jv+CgSM9jn9h4kd2kkeTumzVhOO5jqDa9SFEBxLu51QtyMjVNA6xyQA5NGezN+Um4dpDdpxifOLN2FIf4Q5d2dBJ+UqnnNtiW0rheeuL2k/ATqbAiWKWHeE+TmS7LwzVe1k3gLvOaq/JwZzOQpq6VKE0/+9r8R7nX/yn8gncs2zp8x2Jf9wZ+pQC6g5fMyYW/u1jKPP5RBYaJ6S2/eFFTfmj5FnrPqrx88GZZHb5QRBnktIf9S5EznsjN7kBnJ3eRUbjfP7wSlVucGbaUlJSUlJSUlJSU1Kb+APQhOLHAOqfyAAAAAElFTkSuQmCC' }}
                        />

                    </View>
                    <View style={styles.conatainer4C}>
                        <Image
                            style={{ width: 30, height: 30,  }}
                            source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB6CAMAAACyeTxmAAAAYFBMVEX///8AAABCQkIPDw/t7e0xMTHZ2dn39/fh4eEXFxeurq7p6eny8vJzc3P8/PxPT0+Xl5fMzMyfn5+Kioq4uLhcXFy/v79paWlVVVWDg4N6enopKSk6OjocHBzGxsZISEj11LqyAAAEx0lEQVRoge2b2ZKqMBCGjSKgIhAXQBR9/7c8Dgl0ZyVowtSpmv9qBlP5JCS94mqlqKo3xKceZaRCFCW1VyjTZZrbBMASUk1hT0GwZJdNrHIYLCFnO3cfikvs3BCbiim2crd81ONg/37OKgfu3tOEf/pCSUDlRurz+FqHU9Hqt3QUxkJiHRMVewhOfWurgPPdElxSyNzzIljFfGQLYclG5GL3t/MvNPtT4B7H6zea+he9jvMLDjEf/IFLRPKR2gFQC5ezQYGwSxD+C2XRMhKW+VA2j+0yejTlGMoEil2NOjHsbWHs20b8xt3+6LSgZRaUBYzUbdoHjNRtqlf34c+WxqFFR/dzXw05tuifQqnitM3AncjXvOkmce1pkz/FEtelBOFDhz/uH/e/4eZxdaHWyC0E97Lm1shSGPTPpR2y++Vi3JIIKjSpbgiuhCXkoa8reOYOfoZ042ofF+Bm3Iu39HCIT3xKrWf1y2WrvOFOLSv6f1/huex2x4A8ZwdK51u9cmk/xQkuMC+riyW8cllMiu1Un2fXmqFeuf3j3eErfTjzMper/HD7YtBWubIOzWXbGV/pywo6m+WVexG383tDF4s8X7Z9W7jAzJfOOfg9v49+jrFJdGDGMg3O5ckdP8GUmZGrbqRfbvJis6xLGu+HerLudj/g0uO11k71I54GYOld/1xuxPJVYzmvkrF6NziXGw/pqhH8FLE3w7B5XFQDMfafMpTBb41Z7RxuAtVUIrgdSem531731pJLz+DGW0LcwKs8yTJLw2YWVy28WMCTcuUmRwX7FdiRmz402G/Ablx8Knd07wHsxG0RtsmER/0p2IGb4n3MOBe44FoAkgr701zEeK8xv1jNBNN3RPvAx3mKm+PqcAHf+TkLzB8MchET3MOaGAB0BrhUR9q5T/SGTie9axI7g8+akVYuTirXypsNqSNYsDiDf7JweVoljsdCrWILWCow36a4giPVe5ZoLB7jIFIU/vJopJGLG8HqGg/gtTSdrETTtD9auMIat2aPFhXidJaP4Ru0Rq5Qk7G2RjOIBVRw+ho/rFd5g0dqubils56oSCdmMHJiPx/lNfpXw8UBkvaVB0kILDyQFBaNP3w4UXWmcGPcDXd6ewjAOANDx3s8hGB0C4mbY1txN8bnomCBICdB5gyZZbkpN3LxvndYY+U+rnypkcMSXLQUpY3cuWvMBaedgZHzlCIDEaxyt/M6K/B4mtwekGB/rnLruX1/eHINfoqaOAgHazLXWL81C+4R+Wxt+IUsv8SluuFTEhaQybBFIGYQuFfnfWy8DyajhU03Gu7nwTgVsZaXYQcPCtzuozXWga2d1VTiNt+9v4KMrCHR5/Jd50fOwHomvPc1HMH++zgRLLUl2gvQt8ognzJVVcL0yxIIb4ybK0h/MNNHAsG5+McA10X6VoPyKXCw/i/EcI3O3IfrOwM4eJ1fFFRFNL3JkH12CLq2itUP2t+HoOsuzxuF5KJAq5MmlrnfeF+NIOjaiWAqce1ec74g6OqEJPoocb3/ngJCkA5lPcM6bOB9s+a096kLHKduuHYas6H7r71fp4l+F9Bllfj9EZubdok23A+uPrBf/kVVniFU3fRQj4KCZ17dioC/iBF+HXNjydM/3i9OZXe3/0AAAAAASUVORK5CYII=' }}
                        />

                    </View>
                    <View style={styles.conatainer4D}>
                        <Image
                            style={{ width: 50, height: 50, borderRadius: 25 }}
                            source={{ uri: 'data:image/jpeg;base64,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' }}
                        />

                    </View>
                </View>
{/* </ScrollView> */}
            </View>//super
            // </ScrollView>
            // </View>

        );
    }
}
export default Screen_Assign_PureComp;
const styles = StyleSheet.create({
    parent_Conatiner: {
        flex: 1,
        
        
    },
    conatainer1: {
        flex: .3,
        // justifyContent:"center",
        // alignItems:"center",
        backgroundColor: "white"

    },
    conatainer2: {
        flex: .2,
        // justifyContent:"center",
        // alignItems:"center",
        //  backgroundColor: "blue"
    },
    conatainer2a: {
        flex: 1,
        // backgroundColor: "skyblue",
        flexDirection: "row"

    },
    conatainer2aA: {
        flex: 1,
        paddingLeft: 20,
        paddingTop: 10,
        // backgroundColor: "skyblue",

    },
    conatainer2aB: {
        flex: 1,
        //  flexDirection:"column-reverse",
        paddingTop: 15,
        // backgroundColor: "purple",

    },

    conatainer2b: {
        flex: 1,
        flexDirection: "row",
        marginBottom: 10,
        // backgroundColor: ""

    },
    //badge
    conatainer2bA: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#f0f0f0",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 17,
        marginLeft: 10,
        marginRight: 10,
        alignItems: "center",

    },
    conatainer2bB: {
        flex: 1,
        flexDirection: "row",
        borderRadius: 10,
        backgroundColor:"#f0f0f0",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        paddingRight:10,

        elevation: 17,
        alignItems: "center",

    },
    conatainer2bC: {
        flex: 1,
        borderRadius: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 17,
        flexDirection: "row",
        backgroundColor: "#f0f0f0",
        marginLeft: 10,
        paddingLeft: 10,
        marginRight:10,
        alignItems: "center",

    },
    conatainer3: {
        flex: .4,
        // justifyContent:"center",
        // alignItems:"center",
        // backgroundColor: "red"
    },
    conatainer3A: {
        flex: .3,
        backgroundColor: "white"
    },
    conatainer3B: {
        flex: .7,
        // backgroundColor: "red"
    },

    conatainer4: {
        flex: .07,
        // justifyContent:"center",
        // alignItems:"center",
        flexDirection: "row",
        //  backgroundColor: "green"
    },
    conatainer4A: {
        flex: 1,
        backgroundColor: "#f0f0f0",
        borderRadius:10,
        paddingLeft: 3,
        shadowColor: "black",
        marginRight:10,
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 17,
        justifyContent: "center",
        alignItems: "center",
        paddingRight: 3,
    },
    conatainer4B: {
        flex: 1,
        backgroundColor: "orange",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10
    },
    conatainer4C: {
        flex: 1,
        backgroundColor: "orange",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",

    }, conatainer4D: {
        flex: 1,
        //  backgroundColor: "green",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    }
})
