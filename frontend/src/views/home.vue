<script setup>

</script>

<template>
    <div class="hero">
        <img src="@/assets/images/logo2.png" alt="Nove2 Logo" class="logo">
        <p>
            Novetus Community Servers
        </p>
    </div>
    <div class="section">
        <div class="text">
            <h1>
                Welcome to Nove
            </h1>
            <p>
                This is a community server list for <a href="https://bitl.itch.io/novetus">Novetus</a>, a platform for playing classic Roblox games.
            </p>
            <div class="row">
                <button>
                    <img src="@/assets/icons/servers.png" />
                    <span>
                        Find Servers
                    </span>
                </button>
                <button class="purple">
                    <img src="@/assets/icons/discord.png" />
                    <span>
                        Discord
                    </span>
                </button>
            </div>
        </div>
        <div class="img">
            <img src="@/assets/images/robloxing.jpg" />
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
    mounted() {

    }
}
</script>

<style scoped lang="scss">
.hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .logo {
        width: 350px;
        height: auto;
        margin: 0;
    }



    p {
        font-size: 1.2rem;
        color: #666;
        margin: 0;
        font-weight: 500;
    }
}

.section {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 20px;
    padding: 20px;

    .text {
        flex: 1;
        margin-right: 20px;
    }

    .img {
        flex: 1;

        img {
            width: 100%;
            height: auto;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.466);
        }
    }

    h1 {
        font-size: 2rem;
        color: #333;
        margin-bottom: 10px;
    }

    p {
        font-size: 1.3rem;
        color: #555;
        max-width: 600px;
    }

    .row {
        display: flex;
        flex-direction: row;
        gap: 10px;
        margin-top: 20px;

        button {
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
            font-family: 'Rubik', sans-serif;
            font-weight: 500;
            font-size: 1rem;
            display: flex;
            align-items: center;

            &.purple {
                background-color: #424ac1;

                &:hover {
                    background-color: #2f358b;
                }
            }

            img {
                width: 20px;
                height: 20px;
                margin-right: 8px;
            }

            &:hover {
                background-color: #0056b3;
            }
        }
    }
}
</style>
