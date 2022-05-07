import Post from "./Post";

export default function Posts(){
    
    const srcPosts = [
        {perfilImage:"assets/img/meowed.svg",
         perfilName:"meowed",
         postImage:"assets/img/gato-telefone.svg",
         likedImage:"assets/img/respondeai.svg",
         whoLiked:"respondeai",
         likes:"101.523"
        },
        {perfilImage:"assets/img/barked.svg",
         perfilName:"barked",
         postImage:"assets/img/dog.svg",
         likedImage:"assets/img/adorable_animals.svg",
         whoLiked:"adorable_animals",
         likes:"99.159"
        }
    ]
    
    
    
    
    return  (
        <div class="posts">
            {srcPosts.map(srcPost => <Post perfilImage={srcPost.perfilImage} perfilName={srcPost.perfilName} postImage={srcPost.postImage} likedImage={srcPost.likedImage} whoLiked={srcPost.whoLiked} likes={srcPost.likes}/>)}
        </div>
    )
}