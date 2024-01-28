import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ShadowSeaScreen() {
  const [showComments, setShowComments] = useState({});
  const posts = [
    {
      id: 1,
      title: "How to find sublease in Fairfax?",
      userId: "JohnDoe123",
      comments: [
        {
          id: 101,
          userId: "Alice",
          comment: "Great tips!",
          replies: [
            { id: 201, userId: "David", comment: "Awesome!", replies: [] },
            { id: 202, userId: "Emily", comment: "I agree!", replies: [] },
          ],
        },
        { id: 102, userId: "Bob", comment: "Thanks for sharing!", replies: [] },
        {
          id: 103,
          userId: "Charlie",
          comment: "I found a place using your advice!",
          replies: [
            { id: 203, userId: "Frank", comment: "Amazing!", replies: [] },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Best coffee shops in the city",
      userId: "CoffeeLover",
      comments: [
        { id: 104, userId: "Sarah", comment: "Great list!", replies: [] },
        {
          id: 105,
          userId: "Tom",
          comment: "I've tried a few, they're awesome!",
          replies: [
            { id: 204, userId: "Lisa", comment: "Which one is your favorite?", replies: [] },
          ],
        },
        { id: 106, userId: "Alex", comment: "Thanks for sharing!", replies: [] },
      ],
    },
    {
      id: 3,
      title: "Hiking trails with breathtaking views",
      userId: "NatureExplorer",
      comments: [
        { id: 107, userId: "Jordan", comment: "Love these trails!", replies: [] },
        {
          id: 108,
          userId: "Olivia",
          comment: "The views are indeed breathtaking!",
          replies: [
            { id: 205, userId: "Ethan", comment: "I need to try these trails!", replies: [] },
          ],
        },
      ],
    },
  ];

  const handleToggleComments = (postId, commentId) => {
    setShowComments((prev) => {
      const postComments = prev[postId] || {};
      return {
        ...prev,
        [postId]: {
          ...postComments,
          [commentId]: !postComments[commentId],
        },
      };
    });
  };

  const renderComment = (postId, comment, isReply = false) => {
    const isCommentVisible = showComments[postId]?.[comment.id] || false;

    return (
      <View key={comment.id} style={styles.commentContainer}>
        {!isReply && <View style={styles.connectingLine} />}

        <Text style={styles.commentText}>{comment.comment}</Text>
        <View style={styles.commentActions}>
          <TouchableOpacity style={styles.commentActionBtn}>
            <Ionicons
              name="thumbs-up"
              size={15}
              style={styles.commentActionIcon}
            />
            <Text style={styles.commentActionText}>Like</Text>
          </TouchableOpacity>
          <Text style={styles.commentActionText}>{comment.userId}</Text>
          <TouchableOpacity style={styles.commentActionBtn}>
            <Ionicons
              name="chatbubble-ellipses"
              size={15}
              style={styles.commentActionIcon}
            />
            <Text style={styles.commentActionText}>Comment</Text>
          </TouchableOpacity>
        </View>
        {comment.replies.length > 0 && (
          <TouchableOpacity
            style={styles.viewAllCommentsBtn}
            onPress={() => handleToggleComments(postId, comment.id)}
          >
            <Text style={styles.viewMoreText}>
              {isCommentVisible ? "Collapse replies" : "View replies"}
            </Text>
          </TouchableOpacity>
        )}
        {isCommentVisible &&
          comment.replies.map((reply) =>
            renderComment(postId, reply, true)
          )}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={20}
          color="#3498db"
          style={styles.searchIcon}
        />
        <TextInput style={styles.searchBar} placeholder="Search" />
      </View>

      <TouchableOpacity style={styles.makePostButton}>
        <Text style={styles.makePostButtonText}>Make a Post on Shadow Sea</Text>
      </TouchableOpacity>

      {posts.map((post) => (
        <View key={post.id} style={styles.postContainer}>
          <View style={styles.card}>
            <View style={styles.connectingLine} />
            <Text style={styles.postTitle}>{post.title}</Text>
            <View style={styles.postActions}>
              <TouchableOpacity style={styles.actionBtn}>
                <Ionicons name="thumbs-up" size={20} color="#3498db" />
                <Text style={styles.actionBtnText}>Like</Text>
              </TouchableOpacity>
              <Text style={styles.userIdText}>{post.userId}</Text>
              <TouchableOpacity style={styles.actionBtn}>
                <Ionicons
                  name="chatbubble-ellipses"
                  size={20}
                  color="#3498db"
                />
                <Text style={styles.actionBtnText}>Comment</Text>
              </TouchableOpacity>
            </View>
          </View>
          {post.comments.map((comment) =>
            renderComment(post.id, comment)
          )}
          {post.comments.length > 2 && !showComments[post.id]?.viewAll && (
            <TouchableOpacity
              style={styles.viewAllCommentsBtn}
              onPress={() => handleToggleComments(post.id, 'viewAll')}
            >
              <Text style={styles.viewMoreText}>View more comments</Text>
            </TouchableOpacity>
          )}
          {showComments[post.id]?.viewAll && (
            post.comments.slice(2).map((comment) =>
              renderComment(post.id, comment)
            )
          )}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#f2f2f2",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
  },
  makePostButton: {
    backgroundColor: "#3498db",
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  makePostButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  postContainer: {
    marginBottom: 20,
  },
  card: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#fff",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.2, 
    shadowRadius: 3, 
  },
  postTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  postActions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", 
  },
  actionBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionBtnText: {
    marginLeft: 5,
    color: "#555",
  },
  userIdText: {
    fontWeight: "bold",
    marginLeft: 10,
    fontSize: 16,
  },
  commentContainer: {
    marginBottom: 5,
    marginLeft: 20, 
    backgroundColor: "#f9f9f9",
    padding: 10, 
    borderRadius: 8, 
    borderWidth: 1,
    borderColor: "#ddd",
  },
  commentText: {
    textAlign: "center",
  },
  viewAllCommentsBtn: {
    flexDirection: "row",
    backgroundColor: "#e1e1e1",
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5, 
  },
  viewMoreText: {
    color: "#555",
    fontSize: 14,
    marginLeft: 5,
  },
  commentActions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 5,
  },
  commentActionBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  commentActionIcon: {
    marginRight: 5,
    color: "#3498db",
  },
  commentActionText: {
    color: "#555",
  },
  connectingLine: {
    height: 4, 
    backgroundColor: "#3498db",
    position: "absolute",
    top: -2, 
    left: 15, 
    zIndex: -1,
    width: 2, 
  },
  viewAllCommentsBtn: {
    flexDirection: "row",
    backgroundColor: "#e1e1e1",
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
});
