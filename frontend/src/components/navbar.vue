<script setup>

</script>

<template>
<div class="navbar">
    <div class="logo">
        <img src="@/assets/images/logo2.png"/>
    </div>
    <div class="buttons">
        <input type="text" placeholder="Search..."/>
        <button>
            Home
        </button>
        <button>
            Servers
        </button>
        <button>
            Requests
        </button>
    </div>
</div>
</template>

<script>
export default {
  props: {

  },
  data() {
    return {

    };
  },
  methods: {

  },
  mounted(){

  }
}
</script>

<style scoped lang="scss">
.navbar{
    width: 100%;
    height: 70px;
    background: linear-gradient(0deg, #2c75b9, #3ca1ff);

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 20px;

    .logo{
        img{
            height: 50px;
        }
    }

    .buttons{
        display: flex;
        align-items: center;

        input{
            all: unset;
            border-radius: 5px;
            background: #ffffff;
            padding: 10px;
            font-size: 16px;
            font-family: 'Rubik', sans-serif;
            width: 300px;
            margin-right: 10px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.507);
            transition: box-shadow 0.3s ease;
            outline: 2px solid #3ca1ff;
            background: linear-gradient(0deg, #d1d1d1, #ffffff);

            &:focus{
            background: linear-gradient(0deg, #63edff, #ffffff);

            }
        }

        button{
            border-radius: 5px;
            border: none;
            background: linear-gradient(0deg, #1e4d79, #3ca1ff);
            color: #ffffff;
            padding: 10px 15px;
            margin-left: 10px;
            font-size: 20px;
            font-family: 'Rubik', sans-serif;
            min-width: 100px;
            text-transform: uppercase;
            font-style: italic;
            font-weight: 700;
            &:hover{
                background-color: #f0f0f0;
                cursor: pointer;
            }

            &:active{
                background: linear-gradient(0deg, #122e47, #3ca1ff);

            }
        }
    }
}
</style>
