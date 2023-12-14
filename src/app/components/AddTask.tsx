"use client"
import { addTodo } from "@/api";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddTask = () => {
  // タスク入力を管理するステート
  const [taskTitle, setTaskTitle] = useState("");

  // フォームの送信時の処理
  const handleSubmit = async (e: FormEvent) => {
    // デフォルトのフォーム送信イベントを防ぐ
    e.preventDefault();

    // タスクを追加するAPI関数を呼び出し
    await addTodo({ id: uuidv4(), text: taskTitle });

    // タスク入力をクリアする
    setTaskTitle("");
  };

  return (
    <form className="mb-4 space-y-3" onSubmit={handleSubmit}>
      <input 
        type="text" 
        className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-400" 
        value={taskTitle}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTaskTitle(e.target.value)}
      />

      <button className="w-full px-4 py-2 text-white bg-blue-500 rounded transform hover:bg-blue-400 hover:scale-95 duration-200" type="submit">
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
