import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { RoleScoreController } from "../roleScore.controller";
import { RoleScoreService } from "../roleScore.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  backend: 42.42,
  businessAnalyst: 42.42,
  createdAt: new Date(),
  dataScience: 42.42,
  frontend: 42.42,
  id: "exampleId",
  qa: 42.42,
  saleEngineer: 42.42,
  uiUx: 42.42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  backend: 42.42,
  businessAnalyst: 42.42,
  createdAt: new Date(),
  dataScience: 42.42,
  frontend: 42.42,
  id: "exampleId",
  qa: 42.42,
  saleEngineer: 42.42,
  uiUx: 42.42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    backend: 42.42,
    businessAnalyst: 42.42,
    createdAt: new Date(),
    dataScience: 42.42,
    frontend: 42.42,
    id: "exampleId",
    qa: 42.42,
    saleEngineer: 42.42,
    uiUx: 42.42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  backend: 42.42,
  businessAnalyst: 42.42,
  createdAt: new Date(),
  dataScience: 42.42,
  frontend: 42.42,
  id: "exampleId",
  qa: 42.42,
  saleEngineer: 42.42,
  uiUx: 42.42,
  updatedAt: new Date(),
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

describe("RoleScore", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: RoleScoreService,
          useValue: service,
        },
      ],
      controllers: [RoleScoreController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /roleScores", async () => {
    await request(app.getHttpServer())
      .post("/roleScores")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /roleScores", async () => {
    await request(app.getHttpServer())
      .get("/roleScores")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /roleScores/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/roleScores"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /roleScores/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/roleScores"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
