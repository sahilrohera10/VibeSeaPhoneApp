import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

export default function ShadowSeaScreen() {
  const [showComments, setShowComments] = useState({});
 
  const posts = [
    {
      id: 1,
      userId: "John123 ",
      title: "How to find sublease in Fairfax?",
      collegeId: "John01.dtu.ac.in ",
      comments: [
        {
          id: 101,
          userId: "Alice ",
          collegeId: "Alice.dtu.ac.in ",
          comment: "Great tips!",
          replies: [
            {
              id: 201,
              userId: "yash ",
              collegeId: "yash323.dtu.ac.in ",
              comment: "Awesome!",
              replies: [],
            },
            {
              id: 202,
              userId: "Vansh ",
              collegeId: "Vansh001.dtu.ac.in ",
              comment: "I agree!",
              replies: [],
            },
          ],
        },
        {
          id: 102,
          userId: "Bob01 ",
          collegeId: "bob.dtu.ac.in ",
          comment: "Thanks for sharing!",
          replies: [],
        },
        {
          id: 103,
          userId: "Charlie ",
          collegeId: "char.dtu.ac.in ",
          comment: "I found a place using your advice!",
          replies: [
            {
              id: 203,
              userId: "Frank ",
              collegeId: "frank.dtu.ac.in ",
              comment: "Amazing!",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      userId: "abc12 ",
      title: "Best coffee shops in the city",
      collegeId: "abc.dtu.ac.in ",
      comments: [
        {
          id: 104,
          userId: "Sarah ",
          collegeId: "sarah.dtu.ac.in ",
          comment: "Great list!",
          replies: [],
        },
        {
          id: 105,
          userId: "Tom ",
          collegeId: "tom.dtu.ac.in ",
          comment: "I've tried a few, they're awesome!",
          replies: [
            {
              id: 204,
              userId: "Lisa ",
              collegeId: "lisa.dtu.ac.in ",
              comment: "Which one is your favorite?",
              replies: [],
            },
          ],
        },
        {
          id: 106,
          userId: "Alex ",
          collegeId: "Alex.dtu.ac.in ",
          comment: "Thanks for sharing!",
          replies: [],
        },
      ],
    },
    {
      id: 3,
      userId: "dizzy10 ",
      title: "Hiking trails with breathtaking views",
      companyId: "dizz.xyztech ",
      comments: [
        {
          id: 107,
          userId: "Jordan ",
          companyId: "jordon.xyztech ",
          comment: "Love these trails!",
          replies: [],
        },
        {
          id: 108,
          userId: "Olivia ",
          companyId: "oliv.xyztech ",
          comment: "The views are indeed breathtaking!",
          replies: [
            {
              id: 205,
              userId: "Ethan ",
              companyId: "ethan.xyztech ",
              comment: "I need to try these trails!",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      id: 4,
      userId: "any@32 ",
      title: "Average rent near DTU ? ",
      comments: [
        {
          id: 109,
          userId: "Michael ",
          collegeId: "mic.dtu.ac.in ",
          comment: "Any suggestions?",
          replies: [],
        },
        {
          id: 110,
          userId: "Sophie ",
          collegeId: "sop.dtu.ac.in ",
          comment: "Check out the areas around North Campus!",
          replies: [
            {
              id: 206,
              userId: "Nathan ",
              collegeId: "Nat.dtu.ac.in ",
              comment: "Are there any single-bedroom apartments?",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      id: 5,
      userId: "Techno ",
      title: "Job opportunities at XYZ Tech",
      companyId: "Tech.xyz ",
      comments: [
        {
          id: 111,
          userId: "Eva ",
          companyId: "Eva.xyz ",
          comment: "Tell me more about the company.",
          replies: [],
        },
        {
          id: 112,
          userId: "Alex ",
          companyId: "Al.xyz ",
          comment: "I had a great experience working there!",
          replies: [
            {
              id: 207,
              userId: "Sophia ",
              companyId: "Sop.xyz ",
              comment: "Is it suitable for fresh graduates?",
              replies: [],
            },
          ],
        },
        {
          id: 113,
          userId: "John ",
          companyId: "Jon.xyz ",
          comment: "What positions are currently open?",
          replies: [],
        },
      ],
    },
    {
      id: 6,
      userId: "Gaurav ",
      title: "Exploring internships during summer break",
      comments: [
        {
          id: 114,
          userId: "Liam ",
          companyId: "Liam.xyz ",
          comment: "Any recommendations?",
          replies: [],
        },
        {
          id: 115,
          userId: "Emma ",
          companyId: "Emma.xyz ",
          comment:
            "Look into tech startups, they often have exciting opportunities!",
          replies: [
            {
              id: 208,
              userId: "James ",
              companyId: "James.xyz ",
              comment: "Are remote internships common?",
              replies: [],
            },
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

  const handleCollapseAllComments = (postId) => {
    setShowComments((prev) => {
      const postComments = prev[postId] || {};
      const collapsedComments = {};
      if (postComments[1]) {
        collapsedComments[1] = postComments[1]; 
      }
      return {
        ...prev,
        [postId]: collapsedComments,
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
            <AntDesign name="hearto" size={15} style={styles.commentActionIcon} />
          </TouchableOpacity>
          <Text style={styles.commentActionText}>{comment.userId} </Text>
          <Text style={styles.commentActionText}>{comment.companyId ? comment.companyId : " - "}</Text>
          <Text style={styles.commentActionText}>{comment.collegeId ? comment.collegeId : " - "}</Text>
          <TouchableOpacity style={styles.commentActionBtn}>
            <AntDesign name="message1" size={15} style={styles.commentActionIcon} />
          </TouchableOpacity>
        </View>
        {comment.replies.length > 0 && (
          <TouchableOpacity
            style={styles.viewAllCommentsBtn}
            onPress={() => handleToggleComments(postId, comment.id)}
          >
            <Text style={styles.viewMoreText}>
              {isCommentVisible ? "Collapse replies " : "View replies "}
            </Text>
          </TouchableOpacity>
        )}
        {isCommentVisible &&
          comment.replies.map((reply) => renderComment(postId, reply, true))}
      </View>
    );
  };

  const renderPostComments = (post) => {
    const initialComments = post.comments.slice(0, 1);
    const remainingComments = post.comments.slice(1);

    return (
      <View>
        {initialComments.map((comment) => renderComment(post.id, comment))}
        {remainingComments.length > 0 && !showComments[post.id]?.viewAll && (
          <TouchableOpacity
            style={styles.viewAllCommentsBtn}
            onPress={() => handleToggleComments(post.id, "viewAll")}
          >
            <Text style={styles.viewMoreText}>View all comments </Text>
          </TouchableOpacity>
        )}
        {showComments[post.id]?.viewAll &&
          remainingComments.map((comment) => renderComment(post.id, comment))}
        {showComments[post.id]?.viewAll && remainingComments.length > 0 && (
          <TouchableOpacity
            style={styles.viewAllCommentsBtn}
            onPress={() => handleCollapseAllComments(post.id)}
          >
            <Text style={styles.viewMoreText}>Collapse All Comments </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const renderPost = (post) => {
    return (
      <View key={post.id}>
        <View style={styles.line} />
        <View style={styles.postContainer}>
          <View style={styles.card}>
            <View style={styles.connectingLine} />
            <Text style={styles.postTitle}>{post.title}</Text>
            <View style={styles.postActions}>
              <TouchableOpacity style={styles.commentActionBtn}>
                <AntDesign name="hearto" size={18} style={styles.commentActionIcon} />
              </TouchableOpacity>
              <Text style={styles.postText}>{post.userId}</Text>
              <Text style={styles.postText}>{post.companyId ? post.companyId : " - "}</Text>
              <Text style={styles.postText}>{post.collegeId ? post.collegeId : " - "}</Text>
              <TouchableOpacity style={styles.commentActionBtn}>
                <AntDesign name="message1" size={18} style={styles.commentActionIcon} />
              </TouchableOpacity>
            </View>
          </View>
          {renderPostComments(post)}
        </View>
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
        <Text style={styles.makePostButtonText}>
          Make a Post on Shadow Sea{" "}
        </Text>
      </TouchableOpacity>

{posts.map((post) => renderPost(post))}

      <View style={{ height: 20 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 20,
    backgroundColor: "#ecf0f1",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#bdc3c7",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  line: {
    height: 1.5,
    backgroundColor: "grey",
    marginVertical: 10,
  },
  searchIcon: {
    marginRight: 10,
    color: "#3498db",
  },
  searchBar: {
    flex: 1,
    height: 40,
    color: "#333", 
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
    backgroundColor: "#ffffff", 
    borderRadius: 10,
    elevation: 3,
    borderWidth: 2,  
    borderColor: "#3498db",  
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    padding:5
  },

  card: {
    borderRadius: 10,
    padding: 18,
    marginBottom: 10,
    backgroundColor: "#ffffff",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "center",
    color: "#3498db", 
  },
  postText:{
   fontSize:10,
   color: "#555",
  }, 
  postActions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // gap:18
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
    color: "grey",
    fontSize:12
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
