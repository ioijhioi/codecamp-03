import {createConnection} from 'typeorm'
import { ApolloServer, gql} from 'apollo-server'
import Board from './Board.postgres';
import { resolveObjectURL } from 'buffer';
import { resourceUsage } from 'process';
import { resourceLimits } from 'worker_threads';
import Product from './Product.postgres'

const typeDefs = gql`
    #Board
    input CreateBoardInput {
        writer: String
        title: String
        age: Int
    }
    
    type Return {
        message: String
        number: Int
    }
    
    type Board {
        number: Int
        writer: String
        title: String
        age: Int
    }
    
    type Query {
        fetchBoard: String!
        fetchBoards: [Board]  
    }
    
    type Mutation {
        # 주석 createBoard(writer: String, title: String, age: Int): Return
        createBoard(createBoardInput: CreateBoardInput): Return
        updateBoard: Return
        deleteBoard: Return
    }
    #Product
    input CreateProductInput {
        writer: String
        title: String
        contents: String
    }
    
    type Return {
        message: String
        number: Int
    }
    
    type Product {
        number: Int
        writer: String
        title: String
        content: String
    }

    type Query {
        fetchProduct: String!
        fetchProducts: [Product]
    }
    
    type Mutation {
        createProduct(createProductInput: CreateBoardInput): Return
        updateProduct: Return
        deleteProduct: Return
    }
`;
const resolvers ={
    Query: {
        //Board
        fetchBoard: async () => {
            // 데이터베이스에서 해당하는 데이터 꺼내서 브라우저에 던져주기

            const result = await Board.findOne({where: {number: 1, deletedAt: null}})
            return result;
            // return{
            //     writer: result?.writer,
            //     title: result?.title,
            //     age: result?.age,
            // }
        },
        fetchBoards: async() => {
            const result = await Board.find({ where: { deletedAt: null}});
            return result;
        },
        //Product
        fetchProduct: async () => {
            const result = await Product.findOne({where: {number: 1, deletedAt: null}})
            return result;
        },
        fetchProducts: async () => {
            const result = await Product.find({where: { deletedAt: null}});
        }
    },
    Mutation:{
        //Board
        createBoard: async (_: any, args: any) => {
            // 데이터베이스 데이터 입력하기
            // const result = await Board.insert({ 
            //     title: args.title, 
            //     writer: args.writer, 
            //     age: args.age, 
            const result = await Board.insert({ 
                ...args.createBoardInput,
                // title: args.createBoardInput.title, 
                // writer: args.createBoardInput.writer, 
                // age: args.createBoardInput.age, 
            });
            

            return {message: "성공했습니다", number: result.identifiers[0]. number}
        },
        updateBoard: async (_: any, args: any) => {
            await Board.update({ number: 3},{ writer: "영희"})
            return { message: "수정완료!!"}
        },

        deleteBoard: async () => {
            // await Board.delete ({number:4})
            await Board.update ({number: 5}, { deletedAt: new Date()})
            return { message: "삭제완료!"}
        },
        //Product
        updateProduct: async (_: any, args: any) => {
            await Product.update({ number: 4 }, { writer: "중현"})
            return { message: "수정완료!"}
        },
        deleteProduct: async () => {
            await Product.update({ number: 5}, { deletedAt: new Date()})
        }
    },

};

const server = new ApolloServer ({
    typeDefs,
    resolvers,
});

createConnection ({
    type: "postgres",
    database: "postgres",
    username: "postgres",
    password: "postgres2021",
    port: 5005,
    host: "34.64.221.225",
    entities: [__dirname + "/*.postgres.ts"],
    logging: true,
    synchronize: true,
})
    .then(() => {
        //연결에 성공했을때 실행
        console.log("접속완료!!!");
        server.listen({port: 4000});
    })
    .catch((error) => {console.log(error)});
