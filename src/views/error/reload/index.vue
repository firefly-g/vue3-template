<template>
	<div></div>
</template>

<script lang="ts" setup name="reload">
import { useRouter } from 'vue-router'

const router = useRouter()
router.go(-1)
</script>
