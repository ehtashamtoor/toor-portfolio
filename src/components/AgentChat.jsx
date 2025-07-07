"use client";

import { useState, useRef, useEffect } from "react";
import { BotMessageSquare, Send, X, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { v4 as uuidv4 } from "uuid";
import userIcon from "/user-icon.png";
import agentIcon from "/agentzero-icon.png";

export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [sessionId, setSessionId] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to bottom of messages when new messages are added
  useEffect(() => {
    if (messages.length === 0) {
      setSessionId(uuidv4());
    }
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Simulate bot response
  const getBotResponse = async (userMessage, sessionId) => {
    const apiUrl = `${import.meta.env.VITE_AGENT_API_URL}/ask-AgentZero`;
    const response = await fetch(`${apiUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: userMessage,
        session_id: sessionId,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return data.result || "I'm not sure how to respond to that yet.";
    } else {
      console.error("Failed to get a valid response:", response.statusText);
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("sessionId:", sessionId);

    if (input.trim() === "") return;

    // Create a new message object with Human key only
    const newMessage = {
      Human: input,
    };

    // Add the message to the UI immediately, but without Agent response yet
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInput("");

    // Show typing indicator
    setIsTyping(true);

    // Simulate delay for bot response
    // setTimeout(async () => {
    const botResponse = await getBotResponse(input, sessionId);
    console.log("Bot response:", botResponse);

    // Update the last message to include the Agent response
    setMessages((prevMessages) => {
      const updatedMessages = [...prevMessages];
      updatedMessages[updatedMessages.length - 1] = {
        ...updatedMessages[updatedMessages.length - 1],
        Agent: botResponse,
      };
      return updatedMessages;
    });

    setIsTyping(false);
    // }, 1500);
  };

  // Custom renderer for markdown links
  const MarkdownLink = ({ href, children }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline"
      >
        {children}
      </a>
    );
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-4 xs:bottom-6 right-4 xs:right-6 p-3 xs:p-4 rounded-full shadow-lg z-50 transition-all duration-300 ${
          isOpen ? "bg-tertiary rotate-90" : "bg-tertiary hover:bg-black-100"
        }`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X className="h-5 w-5 xs:h-6 xs:w-6 text-white-100" />
        ) : (
          <BotMessageSquare className="h-5 w-5 xs:h-6 xs:w-6 text-white-100" />
          // <MessageSquare className="h-5 w-5 xs:h-6 xs:w-6 text-white-100" />
        )}
      </button>

      {/* Chat Container */}
      <div
        className={`fixed bottom-24 right-4 xs:right-6 w-[calc(100%-32px)] xs:w-80 sm:w-96 max-w-full bg-black-100 rounded-lg shadow-card overflow-hidden z-40 transition-all duration-300 transform ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0 pointer-events-none"
        }`}
      >
        {/* Chat Header */}
        <div className="bg-tertiary p-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
            <h3 className="text-white-100 font-bold">AgentZero</h3>
          </div>
          <button
            onClick={toggleChat}
            className="text-secondary hover:text-white-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Messages Container */}
        <div className="h-80 overflow-y-auto p-4 bg-gradient-to-b from-black-200 to-black-100">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-2">
              {/* <MessageSquare className="h-10 w-10 xs:h-12 xs:w-12 text-secondary mb-2 opacity-50" /> */}
              {/* <BotMessageSquare className="h-10 w-10 xs:h-12 xs:w-12 text-secondary mb-2 opacity-50" /> */}
              <img
                src={agentIcon}
                alt="AgentZero Icon"
                className="h-1/3 w-1/4"
              />
              <p className="text-secondary text-sm xs:text-base">
                Need insights on Ehtasham&apos;s Profile? I&apos;m AgentZero —
                here to help!
              </p>
            </div>
          ) : (
            messages.map((message, index) => (
              <div key={index} className="mb-6">
                {/* Human message */}
                <div className="text-right mb-2">
                  <img
                    src={userIcon}
                    alt="User Icon"
                    className="inline-block h-4 w-4 xs:h-5 xs:w-5 mr-1"
                  />
                  <div className="inline-block max-w-[85%] rounded-lg px-3 py-2 bg-tertiary text-white-100">
                    <p className="whitespace-pre-wrap text-sm xs:text-base break-words text-left">
                      {message.Human}
                    </p>
                  </div>
                </div>

                {/* Agent message - only show if it exists */}
                {message.Agent && (
                  <div className="text-left">
                    <img
                      src={agentIcon}
                      alt="User Icon"
                      className="inline-block h-10 w-10 mr-1"
                    />
                    <div className="inline-block max-w-[85%] rounded-lg px-3 py-2 bg-secondary/20 text-white-100">
                      <div className="markdown-content text-sm xs:text-base break-words">
                        <ReactMarkdown
                          components={{
                            a: MarkdownLink,
                            strong: ({ node, ...props }) => (
                              <span className="font-bold" {...props} />
                            ),
                            p: ({ node, ...props }) => (
                              <p className="mb-2" {...props} />
                            ),
                            ol: ({ node, ...props }) => (
                              <ol
                                className="list-decimal pl-5 space-y-1"
                                {...props}
                              />
                            ),
                            ul: ({ node, ...props }) => (
                              <ul
                                className="list-disc pl-5 space-y-1"
                                {...props}
                              />
                            ),
                            li: ({ node, ...props }) => (
                              <li className="mb-1" {...props} />
                            ),
                          }}
                        >
                          {message.Agent}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
          {isTyping && (
            <div className="text-left mb-4">
              <div className="inline-block max-w-[85%] rounded-lg px-3 py-2 bg-secondary/20 text-white-100">
                <div className="flex items-center space-x-2">
                  <Loader2 className="h-3 w-3 xs:h-4 xs:w-4 animate-spin text-secondary" />
                  <span className="text-sm xs:text-base">Thinking...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSubmit} className="p-2 xs:p-3 bg-black-200 flex">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Type a message..."
            className="flex-1 bg-black-100 text-white-100 rounded-l-lg px-2 xs:px-4 py-2 text-sm xs:text-base focus:outline-none"
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            className={`bg-tertiary hover:bg-tertiary/80 text-white-100 rounded-r-lg px-2 xs:px-4 py-2 ${
              !input.trim() || isTyping ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <Send className="h-4 w-4 xs:h-5 xs:w-5" />
          </button>
        </form>
      </div>
    </>
  );
}
