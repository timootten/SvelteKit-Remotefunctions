<script lang="ts">
	import { getQuery1, getQuery2, getQuery3 } from './queries.remote';
</script>

<p>{await getQuery1()}</p>
<p>{await getQuery2()}</p>
<p>{await getQuery3()}</p>
