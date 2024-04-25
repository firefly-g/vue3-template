<template>
	<div></div>
</template>

<script lang="ts" setup name="Reload">
import { useRouter } from 'vue-router'

const router = useRouter()
router.go(-1)
</script>
