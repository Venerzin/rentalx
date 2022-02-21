import { Request, Response } from "express";
import { container } from "tsyringe";

import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    const importCategoryUSeCase = container.resolve(ImportCategoryUseCase);

    await importCategoryUSeCase.execute(file);

    return response.status(201).send();
  }
}

export { ImportCategoryController };
