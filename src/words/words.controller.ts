import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { Word } from "./word.entity";

@Controller("words")
export class WordsController {
  mockWords = {
    words: [
      { id: 1, word: "ranch" },
      { id: 2, word: "car" },
      { id: 3, word: "keyboard" },
    ],
  };

  @Get()
  words(): any {
    return this.mockWords.words;
  }

  @Get("/:id")
  word(@Param("id") id: string): any {
    const word = this.mockWords.words.find((w) => w.id === +id);
    if (!word) return { message: "word not found" };
    return word;
  }

  @Post()
  createWord(@Body("word") word: string): any {
    console.log({ word });
  }

  @Delete("/:id")
  deleteWord(@Param("id") id: string): any {
    console.log(`Deleting word with id of ${id}`);
  }
}
