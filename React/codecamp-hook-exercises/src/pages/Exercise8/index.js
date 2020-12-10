import React, { useState } from "react";
import Instruction from "../../components/Instruction";
import PostList from "../../components/PostList";
import { UserContext } from "../../contexts/user-context";
import mockedPosts from "../../mocks/posts";

function Exercise8() {
  const [user] = useState("john")
  return (
    <div className="page-container">
      <Instruction
        topic="Posts App Theme"
        description="Change theme of posts app with Context API"
      />
      <UserContext.Provider value={{ user: user }}>
        <PostList posts={mockedPosts} />
      </UserContext.Provider>

    </div>
  );
}

export default Exercise8;
