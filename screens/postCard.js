import React, { Component } from "react";
import { render } from "react-dom";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class PostCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardcontainer}>
          <View style={styles.authorContainer}>
            <View style={styles.authorImageContainer}>
              <Image
                source={require("../assets/profile_img.png")}
                style={styles.profileImage}
              ></Image>
            </View>
            <View style={styles.authorNameContainer}>
              <Text style={styles.authorNameText}>
                {this.props.post.author}
              </Text>
            </View>
          </View>
          <Image
            source={require("../assets/post.jpeg")}
            style={styles.postImage}
          />
          <View style={styles.captionContainer}>
            <Text style={styles.captionText}>{this.props.post.caption}</Text>
          </View>
          <View style={styles.actionContainer}>
            <View style={styles.likeButton}>
              <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
              <Text style={styles.likeText}>9K</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20),
  },
  authorContainer: {
    paddingLeft: RFValue(20),
    justifyContent: "center",
  },
  authorImageContainer: {
    flex: 0.8,
  },
  postImage: {
    flex: 0.2,
  },
  profileImage: {
    resizeMode: "contain",
    width: "95%",
    alignSelf: "center",
    height: RFValue(250),
  },
  authorNameContainer: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    color: "white",
  },
  authorNameText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(18),
    color: "white",
  },
  captionContainer: {
    marginTop: RFValue(5),
  },
  captionText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(13),
    color: "white",
  },
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10),
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#eb3948",
    borderRadius: RFValue(30),
  },
  likeText: {
    color: "white",
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    marginLeft: RFValue(5),
  },
});
